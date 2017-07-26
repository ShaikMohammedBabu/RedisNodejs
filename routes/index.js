var express = require('express');
var router = express.Router();
var redis = require('redis');
var client = redis.createClient(6379,'192.168.0.13');//creates a new client

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
var o2={};

router.post('/msg',function (req,res) {

    console.log("entered in post method");
    o2={
        FirstName:req.body.firstName,
        LastName:req.body.lastName,
        Age:req.body.Age,
        Email:req.body.Email
    };
   // var ch=["ch1","ch2"];
    //we cant pass an object in publish method so we have to convert it into string and pass it
   var a= JSON.stringify(o2);
   console.log(req.body.channel);//req.body contains all the data of the user

        client.publish(req.body.channel,a,function (err,reply) {
            console.log("reply--> " + reply);
        });
        //client.publish("hai","second");
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
//storing hash
client.hmset('frameworks', 'javascript', 'AngularJS', 'css', 'Bootstrap', 'node', 'Express',function(err,reply){
    console.log(reply);
});

client.hgetall('frameworks', function(err, object) {
    console.log(object);
});
client.incr('key',function (err,reply) {
    console.log(reply);
});
client.select(2,function (err,reply) {
   client.set("newkey",'wow');
});


/*
client.publish("test","firstMsg",function (err,reply) {
    console.log("reply " + reply);
});



client.publish("hai","second");*/
module.exports = router;
