import os
from flask_pymongo import PyMongo

mongo = PyMongo()


class Config:
    SQLALCHEMY_DATABASE_URI = os.environ['AMPLIFY_DATA_DB_URI']
    SQLALCHEMY_TRACK_MODIFICATIONS = False

class DevelopmentConfig(Config):
    DEBUG = True


class ProductionConfig(Config):
    pass


config = {'default': DevelopmentConfig,
          'development': DevelopmentConfig,
          'production': ProductionConfig}
