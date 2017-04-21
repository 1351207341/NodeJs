///var request = require('request');

var http = require('http');
var querystring = require('querystring');


var post_data = querystring.stringify({
	Category : 1
});

var options = {
    host: '192.168.1.16',
    port: 1089,
    path: '/admin/human/branch/handle/list',
    method: 'POST'
};


var req = http.request(options, function(res) {
  //console.log('STATUS: ' + res.statusCode);
  //console.log('HEADERS: ' + JSON.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data', function (chunk) {
    console.log(chunk);
  });
});

req.write(post_data + "\n");
req.end();