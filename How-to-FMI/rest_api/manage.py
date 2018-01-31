#!/usr/bin/env python
import os
from flask_script import Manager
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import config
from api import users_api, susi_api
from config import mongo
from flask_restful_swagger_2 import get_swagger_blueprint
from flask_swagger_ui import get_swaggerui_blueprint


def create_app(config_name):
    app = Flask('howtofmi')
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    app.config.from_object(config[config_name])
    mongo.init_app(app)

    # Registering blueprints
    app.register_blueprint(users_api.blueprint)
    app.register_blueprint(susi_api.blueprint)

    ######
    # Swagger
    docs = []
    docs.append(users_api.get_swagger_doc())

    swaggerjson_blueprint = get_swagger_blueprint(docs, '/swagger/swagger',
                                                  title='How To FMI',
                                                  api_version='1')
    app.register_blueprint(swaggerjson_blueprint)
    SWAGGER_URL = '/swagger'  # URL for exposing Swagger UI (without trailing '/')

    swaggerui_blueprint = get_swaggerui_blueprint(SWAGGER_URL, '/swagger/swagger.json')

    # Register blueprint at URL
    # (URL must match the one given to factory function above)
    app.register_blueprint(swaggerui_blueprint, url_prefix=SWAGGER_URL)

    ######
    return app


manager = Manager(create_app)
manager.add_option('-c', '--config',
                   dest='config_name',
                   default='default',
                   required=False)

if __name__ == '__main__':
    manager.run()
