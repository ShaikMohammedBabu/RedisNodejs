/**
 * Created by sys3014 on 7/25/17.
 */
var redis = require('redis');
var subscriber=redis.createClient(6379,'192.168.0.13');

subscriber.on("subscribe",function (channel,count) {
    console.log("subscribed to '" + channel + ". Now subscribed to " + count + " channel(s).");
});
var j;
subscriber.on("message",function (channel,message) {
    console.log("Message '" + message + "' on channel '" + channel + "' arrived!");
    //j=JSON.parse(message);
    //console.log(j);
    subscriber.hmset('newhash',message,function (err,reply) {
        console.log("error---->\n " + reply);
    });
});


subscriber.subscribe("test");