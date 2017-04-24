var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/autumn');
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function(){
  /*console.log('mongoose opend');
  var userSchema = new mongoose.Schema({
    name:{type: String, unique: true},
    pwd:String
  },
  {collection: "accounts"});
  var User = mongoose.model('accounts', userSchema);
  User.findOne({name: "LiSi"},function(err, doc){
    if(err) {
      console.log(err);
    }else{
      console.log(doc.name + ", pwd - " + doc.pwd);
    }
  });
  var lisi = new User({name:"LiSi", pwd:"123456"});
  lisi.save(function(err, doc){
    if(err) {
      console.log(err);
    }else{
      console.log(doc.name + ", pwd - " + doc.pwd);
    }
  });*/
});