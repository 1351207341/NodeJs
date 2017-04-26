var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

//默认值
/*var UserSchema = new mongoose.Schema({
  nikename: {
    type: String,
    default: 'default name'
  },
  regtime: {
    type: Date,
    default: Date.now
  }
});

var User = mongoose.model('User', UserSchema);

var user = new User;

console.log(user);*/

//模式修饰符
//预定义修饰符
/*var UserSchema = new mongoose.Schema({
  nikename: {
    type: String,
    trim: true
  }
});
var User = mongoose.model('User', UserSchema);
var user = new User({
  nikename: "  lore n  "
});
console.log(user);*/
//自定义setter修饰符
/*var UserSchema = new mongoose.Schema({
  nikename: {
    type: String,
    trim: true
  },
  link: {
    type: String,
    set: function(url){
      if(!url) return url;

      if(0 !== url.indexOf('http://') && 0 !== url.indexOf('https://')){
        url = 'http://' + url;
      }
      return url;
    }
  }
});
var User = mongoose.model('User', UserSchema);
var user = new User({
  nikename: "  lore n  ",
  link: 'kaolanet.com'
});
console.log(user);*/
//自定义getter修饰符
/*var UserSchema = new mongoose.Schema({
  link: {
    type: String,
    get: function(url){
      if(!url) return url;
      if(0 !== url.indexOf('http://') && 0 !== url.indexOf('https://')){
        url = 'http://' + url;
      }
      return url;
    }
  }
});
var User = mongoose.model('User', UserSchema);
var user = new User({
  link: 'kaolanet.com'
});
user.save(function(err){
  if(err){
    return "err";
  }
  console.log(user.link);
});*/
//模式扩展
// 虚拟属性
/*var UserSchema = new mongoose.Schema({
  fristname: String,
  lastname: String
});
UserSchema.virtual('fullname').get(function(){
  return this.fristname + ' ' + this.lastname;
});
UserSchema.set('toJSON',{getters: true, virtual: true});

var User = mongoose.model('User', UserSchema);
var user = new User({
  fristname: 'luo',
  lastname: 'moumou'
});
console.log(user.fullname);
console.log('json:',JSON.stringify(user));*/

//索引
//唯一索引
var UserSchema = new mongoose.Schema({
  id: {
    type: Number,
    unique: true
  },
  name:{
    type: String,
    index: true
  }
});