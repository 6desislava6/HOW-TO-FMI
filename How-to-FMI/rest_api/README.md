## Installing requirements:
sudo pip3 install -r requirements.txt

## Running the rest server:
service mongod start
python3 manage.py runserver

## Enter the mongo console
sudo mongo

> use howtofmi;

> db.testData.insert({1: 'test'});
