from flask_pymongo import PyMongo

mongo = PyMongo()


class Config:
    SQLALCHEMY_TRACK_MODIFICATIONS = False


class DevelopmentConfig(Config):
    DEBUG = True


class ProductionConfig(Config):
    pass


config = {'default': DevelopmentConfig,
          'development': DevelopmentConfig,
          'production': ProductionConfig}
