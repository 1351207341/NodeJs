var mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/accounts');

var UserSchema = new mongoose.Schema({
  name: String,
  pwd: String
});

mongoose.model('User', UserSchema);