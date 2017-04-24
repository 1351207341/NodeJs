var mongoose = require('mongoose');

require('./model.js');

var User = mongoose.model('User');
var cond = {
  $or: [
    {name: "loren"},
    {name: "loren2"}
  ]
}
User.find(cond, function(err, docs){
  if(err){
    console.log(err);
    return;
  }
  console.log(docs);
});