var express = require('express');

var app = express.createServer(express.logger());

var readContent = function(file) {
   var fs = require('fs');
   return fs.readFileSync(file).toString();

};

app.get('/', function(request, response) {
  response.send(readContent('./index.html'));
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
