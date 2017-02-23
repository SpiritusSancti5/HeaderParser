var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');
var ip = require("ip");

app.get('/',(req,res)=>{
    var lang = req.headers["accept-language"].split(",")[0];
    var software = req.headers["user-agent"].match(/\((.+?)\)/)[1];
    var out = {"ipaddress":ip.address(),"language":lang,"software":software};
   res.send(out);
});

app.get("/",(req,res)=>{
   res.send(req.body); 
});

app.listen(port, function () {
  console.log('App running on port '+port+"!");
});