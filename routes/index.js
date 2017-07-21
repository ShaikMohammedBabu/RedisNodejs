var express = require('express');
var router = express.Router();
var redis = require('redis');
var client = redis.createClient();//creates a new client

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

client.on('connect',function () {
    console.log('connected successfully');
});

//storing string key-value pair in redis-storage
client.set('key','100',function (err,reply) {
   console.log('reply came-->\n'+reply);
});
//to get the value in the key
client.get('key',function (err,reply) {
   console.log('The value is-->\n'+reply);
});
client.get('eds',function (err,reply) {
    console.log('The value is-->\n'+err);
});
module.exports = router;
