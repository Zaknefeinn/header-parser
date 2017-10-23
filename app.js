'use strict';
 
var forwarded = require('forwarded-for');
var express = require('express');
var app = express();
var port = process.env.PORT;
var osLocale = require('os-locale');
 var lang;
osLocale().then(locale => {
    lang = locale;
});

app.get('/', function(req,res){
  var address = forwarded(req, req.headers);
  // var lang = req.headers["accept-language"];
   res.json({
     "ipaddress": address.ip,
     "language": lang,
     "software": process.platform
   });
});

app.listen(port);