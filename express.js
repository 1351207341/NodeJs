var express = require('express');

var app = express();

app.listen(8000, function afterListen(){
  console.log('express runing on http://127.0.0.1:8000');
});