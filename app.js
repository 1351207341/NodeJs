var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var url = 'http://www.imooc.com/learn/54';

request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
     	$ = cheerio.load(body,{decodeEntities: false});
     	var brief = $('.course-brief p').html();
     	console.log(brief);
     	/*fs.writeFile("./data.txt",brief,function(err){
	 		console.log(err)
		})*/
     	//console.log(body);
    }
})