from flask import Blueprint
from flask_restful_swagger_2 import Api, Schema, swagger, Resource
from bson.json_util import dumps, loads
from bson import json_util
from flask import request
# from flask_restful import Resource
from config import mongo
import hashlib
import uuid
from datetime import datetime
from flask import abort
import urllib.request
# from functools import wraps
from api.login_config import FB_URL, JWT_SECRET, JWT_ALGORITHM
from api import email_service
import jwt

import json
from bson import ObjectId


# Important - api, blueprint
users_bp = Blueprint('users', __name__)
users_api = Api(users_bp, catch_all_404s=True, api_spec_url='/swagger/swagger')


class UserModel(Schema):
    type = 'object'
    properties = {
        'id': {
            'type': 'string'
        },
        'first_name': {
            'type': 'string'
        },
        'last_name': {
            'type': 'string'
        },
        'fb_id': {
            'type': 'string'
        },
        'email': {
            'type': 'string'
        },
        'date_registered': {
            'type': 'date'
        },
    }
    required = ['email']


class User(Resource):
    @swagger.doc({
        'tags': ['user'],
        'description': 'Returns a user by an email',
        'parameters': [
            {
                'name': 'email',
                'description': 'The email of the user which serves as an id.',
                'in': 'path',
                'type': 'string'
            }
        ],
        'responses': {
            '200': {
                'description': 'User',
                'schema': UserModel,
                'examples': {
                    'application/json': {
                        'id': 1,
                        'name': 'somebody'
                    }
                }
            }
        }
    })
    def get(self, email):
        user = mongo.db.users.find_one({'email': email})
        return json.dumps(user, indent=4, default=json_util.default)


class Users(Resource):
    @swagger.doc({
        'tags': ['users'],
        'description': 'Returns all users',
        'responses': {
            '200': {
                'description': 'Designs',
                'schema': {
                    'type': 'array',
                    'items': UserModel
                }
            }
        }
    })
    def get(self):
        return dumps(mongo.db.users.find())


class UserData(Schema):
    type = 'object'
    name = 'data'
    properties = {
        'data': {
            'type': 'object',
            'properties': {
                'email': {
                    'type': 'string',
                    'required': True
                },
                'name': {
                    'type': 'string',
                    'required': False
                },
                'first_name': {
                    'type': 'string',
                    'required': False
                },
                'last_name': {
                    'type': 'string',
                    'required': False
                },
                'password': {
                    'type': 'string',
                    'required': False
                },
                'fb_id': {
                    'type': 'string',
                    'required': False
                },
                'facebookToken': {
                    'type': 'string',
                    'required': False
                },
            }
        }
    }


class UsersRegistration(Resource):
    def generate_token(self, user):
        user['token'] = jwt.encode({'email': user['email'],
                                    'password': JWT_SECRET,
                                    '_id': str(user['_id'])}, JWT_ALGORITHM)
        return user

    def fb_login(self, data, real_user):
        response_str = urllib.request.urlopen(FB_URL + data['facebookToken']).read()
        fb_response = loads(response_str.decode('utf8'))
        if 'email' in fb_response and fb_response['email'] == real_user['email']:
            return self.generate_token(real_user)
        else:
            return False

    def system_login(self, data, real_user):
        if hashlib.sha512((data['password'] + real_user['salt']).encode('utf-8')).hexdigest() == real_user['password']:
            return self.generate_token(real_user)
        else:
            return False

    def log_user(self, data):
        real_user = mongo.db.users.find_one({'email': data['email']})

        if real_user is None and 'facebookToken' in data:
            return self.register_user(data)

        if real_user is None:
            return False

        if 'facebookToken' in data:
            return self.fb_login(data, real_user)

        return self.system_login(data, real_user)

    def register_user(self, data):
        if mongo.db.users.find_one({'email': data['email']}) is not None:
            abort(409, "A user with that username already exists.")

        salt = uuid.uuid4().hex
        if 'password' in data:
            hashed_password = hashlib.sha512((data['password'] + salt).encode('utf-8')).hexdigest()
        else:
            hashed_password = None

        user = {
            'email': data['email'],
            'name': data.get('name'),
            'first_name': data.get('first_name'),
            'last_name': data.get('last_name'),
            'salt': salt,
            'password': hashed_password,
            'date_registered': datetime.now(),
            'fb_id': data.get('id')
        }
        mongo.db.users.insert(user)
        email_service.send_email(data['email'])
        return user

    @swagger.doc({
        'tags': ['users'],
        'description': 'Logs in a user and returns the user.',
        'responses': {
            '200': {
                'description': 'User login',
                'schema': {
                    'type': 'array',
                    'items': UserModel
                }
            }
        },
        'parameters': [
            {
                'name': 'data',
                'schema': UserData,
                'in': 'body',
            }
        ]
    })
    def post(self):
        data = request.get_json()['data']
        user = self.log_user(data)
        if user:
            user['_id'] = dumps(user.get('_id') or '')
            user['date_registered'] = dumps(user['date_registered'])
            user['token'] = dumps(user.get('_id') or '')
            user['password'] = None
            print(user)
            return user
        else:
            abort(404, "A user with these credentials doesn't exist.")

    @swagger.doc({
        'tags': ['users'],
        'description': 'Registers a user and returns the user.',
        'responses': {
            '200': {
                'description': 'User registration.',
                'schema': {
                    'type': 'array',
                    'items': UserModel
                }
            }
        },
        'parameters': [
            {
                'name': 'data',
                'schema': UserData,
                'in': 'body',
                'required': True
            }
        ]
    })
    def put(self):
        data = request.get_json()['data']
        self.register_user(data)


# Important step:
users_api.add_resource(Users, '/users/all')
users_api.add_resource(User, '/users/<string:email>')
users_api.add_resource(UsersRegistration, '/users/register_service')
