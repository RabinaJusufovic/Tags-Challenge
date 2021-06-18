//In general this was my idea for getting the text from a submitted link and passing this on to the other function wordCount
//that would count the most repeated words in the text

const { text } = require('express');

module.exports=function(link){
    var http = require('http');

    var options={
        host: link,
        path: '/'
    }

    var request = http.request(options, function(res) {
        var data='';
        res.on('data', function(chunk) {
            data+=chunk;
        });
        res.on('end', function() {
            console.log(data);
        });
    });

    request.on('error', function(e) {
        console.log(e.message);
    });

    request.end();

    return data;
}