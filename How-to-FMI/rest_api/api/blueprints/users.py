from flask import Blueprint
from flask_restful_swagger_2 import Api
from bson.json_util import dumps, loads
from flask import Flask, request
from flask_restful import Resource
from config import mongo
import hashlib
import uuid
from datetime import datetime, timedelta
from flask import abort
import urllib.request
from functools import wraps
from flask_jwt import JWT, jwt_required
from werkzeug.security import safe_str_cmp
from api.login_config import FB_URL, JWT_SECRET, JWT_ALGORITHM, JWT_EXP_DELTA_SECONDS
import jwt



# Important - api, blueprint
users_bp = Blueprint('users', __name__)
users_api = Api(users_bp, add_api_spec_resource=False, catch_all_404s=True)


class User(Resource):
    def get(self, email):
        return dumps(mongo.db.users.find_one({'email': email}))


class Users(Resource):
    def get(self):
        return dumps(mongo.db.users.find())


class UsersRegistration(Resource):
    def generate_token(self, user):
        user['token'] = jwt.encode({'email': user['email'],
                                    'password': JWT_SECRET,
                                    '_id': str(user['_id'])}, JWT_ALGORITHM)
        return user

    def fb_log(self, data, real_user):
        fb_response = urllib.request.urlopen(FB_URL + data['facebookToken']).read()
        if 'email' in fb_response and fb_response['email'] == real_user['email']:
            return self.generate_token(real_user)
        else:
            return False

    def system_login(self, data, real_user):
        print(hashlib.sha512((data['password'] + real_user['salt']).encode('utf-8')).hexdigest())
        print(real_user['password'])
        if hashlib.sha512((data['password'] + real_user['salt']).encode('utf-8')).hexdigest() == real_user['password']:
            return self.generate_token(real_user)
        else:
            return False

    def log_user(self, data):
        real_user = mongo.db.users.find_one({'email': data['email']})
        if real_user is None:
            return False

        if 'facebookToken' in data:
            return self.fb_login(data, real_user)

        return self.system_login(data, real_user)

    def register_user(self, data):
        if mongo.db.users.find_one({'email': data['email']}) is not None:
            abort(409, "A user with that username already exists.")
        salt = uuid.uuid4().hex
        hashed_password = hashlib.sha512((data['password'] + salt).encode('utf-8')).hexdigest()
        mongo.db.users.insert({
            'email': data['email'],
            'name': data['name'],
            'salt': salt,
            'password': hashed_password,
            'date_registered': datetime.now()
        })
        return {'message': 'The user is registered'}

    def post(self):
        data = request.get_json()['data']
        user = self.log_user(data)
        if user:
            return dumps(user)
        else:
            abort(404, "A user with these credentials doesn't exist.")

    def put(self):
        data = request.get_json()['data']
        self.register_user(data)


# Important step:
users_api.add_resource(Users, '/users/all')
users_api.add_resource(User, '/users/<string:email>')
users_api.add_resource(UsersRegistration, '/users/register_service')
