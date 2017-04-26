var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
//自定义方法
var BookSchema = new mongoose.Schema({
  name: String,
  isbn: Number
});

//自定义静态方法
BookSchema.statics.findByISBN = function(isbn, cb){
  this.findOne({isbn: isbn}, function(err, doc){
    cb(err, doc);
  });
};

//自定义实例方法
BookSchema.methods.print = function(){
  console.log(this);
};

var Book = mongoose.model('Book',BookSchema);

var book = new Book({
  name: 'php model',
  isbn: 465253
});
book.save(function(err){
  if(err){
    return console.log('err');
  }

  //调用自定义静态方法
  Book.findByISBN(46525, function(err, doc){
    console.log(doc);
  })

  //调用自定义实例方法
  book.print();

});
