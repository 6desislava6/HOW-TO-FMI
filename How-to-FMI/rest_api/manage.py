#!/usr/bin/env python
import os
from flask_script import Manager
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import config
from api import users_api
from config import mongo


def create_app(config_name):
    app = Flask('howtofmi')
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    app.config.from_object(config[config_name])
    mongo.init_app(app)

    app.register_blueprint(users_api.blueprint)

    return app


manager = Manager(create_app)
manager.add_option('-c', '--config',
    dest='config_name',
    default='default',
    required=False)

if __name__ == '__main__':
    manager.run()
