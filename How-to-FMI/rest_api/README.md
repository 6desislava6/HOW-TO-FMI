sudo pip3 install -r requirements.txt
service mongod start
mongo
> use howtofmi;
> db.testData.insert({1: 'test'});