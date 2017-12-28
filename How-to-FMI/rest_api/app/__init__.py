from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from config import config


db = SQLAlchemy()


def create_app(config_name):
    app = Flask(__name__)
    CORS(app, resources={r"/api/*": {"origins": "*"}})
    app.config.from_object(config[config_name])
    db.init_app(app)

    from api import users_api

    app.register_blueprint(users_api.blueprint)

    return app
