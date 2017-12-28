#!/usr/bin/env python
import os
from flask_script import Manager

from app import create_app

manager = Manager(create_app)
manager.add_option('-c', '--config',
    dest='config_name',
    default='default',
    required=False)

if __name__ == '__main__':
    manager.run()
