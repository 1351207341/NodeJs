var http = require('http');

var requesHandler = function(req, res){
  res.end('hello');
}

var web = http.createServer(requesHandler);

web.listen(8000);

console.log('http://127.0.0.1:8000');