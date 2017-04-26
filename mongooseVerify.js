var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

//mongoose数据校验
//预定义验证器
// require, Number(max,min), String(enum,match)
var OrderSchema = new mongoose.Schema({
  count: {
    type: Number,
    require: true,
    max: 1000,
    min: 10
  },
  status: {
    type: String,
    enum: ['10', '20', '30']
  },
  desc: {
    type: String,
    match: /book/g,
    //自定义验证器
    validate: function(desc){
      return desc.length >= 10;
    }
  }
});
var Order = mongoose.model('Order', OrderSchema);
var order = new Order();
order.count = 20;
order.status = 20;
order.desc = 'books sdgerawgbsadavadw';
order.save(function(err){
  if(err){
    console.log('err')
  }
  console.log('true')
});
