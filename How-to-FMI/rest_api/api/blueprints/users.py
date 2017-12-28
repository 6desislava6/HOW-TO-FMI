from flask import Blueprint
from flask_restful_swagger_2 import Api
from flask import Flask, request
from flask_restful import Resource

users_bp = Blueprint('users', __name__)
users_api = Api(users_bp, add_api_spec_resource=False, catch_all_404s=True)

users = {'1': 'baaa', '2': 'haaa'}
print('ko')


class Users(Resource):
    def get_all(self):
        return users

    def get(self, user_id):
        return {user_id: users[user_id]}

    def put(self, user_id):
        users[user_id] = request.form['data']
        return {user_id: users[user_id]}


users_api.add_resource(Users, '/users/<string:user_id>')
