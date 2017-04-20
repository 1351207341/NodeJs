var express = require('express');

var app = express();

app.use(express.static('./public'))

app.get('/',function(req,res){
  res.end('hello');
});

var Router = express.Router();
Router.get('/add',function(req, res){
  res.end('Router /add');
});
Router.get('/list',function(req, res){
  res.end('Router /list');
});
app.use('/admin', Router);

app.route('/article')
  .get(function(req, res){
    res.end('route get /article');
  })
  .post(function(req, res){
    res.end('route post /article');
  });

app.param('userId', function(req, res, next, id){
  req.id = id;
  next();
});
app.get('/user/:userId', function(req, res){
  res.end('user id ' + req.id);
});

app.listen(8000, function afterListen(){
  console.log('express runing on http://127.0.0.1:8000');
});