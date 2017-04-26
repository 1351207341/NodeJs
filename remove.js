var mongoose = require('mongoose');

require('./model.js');

var User = mongoose.model('User');

User.findOne({name: 'loren'}, function(err, doc){
  if(err){
    console.log(err);
    return;
  }
  if(doc){
    doc.remove();
  }
});