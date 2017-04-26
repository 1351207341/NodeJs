var mongoose = require('mongoose');
require('./model.js');

var User = mongoose.model('User');

var user = new User({
  name: "loren",
  pwd: "123456"
});

user.save(function(err){
  console.log(err)
});