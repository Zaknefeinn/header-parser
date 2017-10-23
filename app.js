'use strict';
 
var forwarded = require('forwarded-for');
var express = require('express');
var app = express();
var port = process.env.PORT;


app.get('/', function(req,res){
  var address = forwarded(req, req.headers);
   res.json({
     "ipaddress": address.ip,
     
   });
});

app.listen(port);