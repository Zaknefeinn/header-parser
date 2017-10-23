var express = require('express');
var app = express();
var publicIp = require('public-ip');
var port = process.env.PORT;
var pubip;
publicIp.v4().then(ip => {
    console.log(ip);
    pubip = ip;
});
app.get('/', function(req,res){
   res.send(pubip);
});

app.listen(port);