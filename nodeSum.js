var host = "127.0.0.1";
var port = 1337;
var express = require("express");
var sum = require("./sum.js");
var app = express();

app.get("/sum/:num1/:num2", function(request, response) {
   response.send("sum "+ request.params.num1 +  "+" + request.params.num2 + "= " + sum.sum(request.params.num1 , request.params.num2)+"!");
});

app.listen(port, host);
console.log('Express listening on host='+host+":"+port);
