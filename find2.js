var mongoose = require('mongoose');

require('./model.js');

var User = mongoose.model('User');

User.find({}, function(err, docs){
  console.log(docs);
});