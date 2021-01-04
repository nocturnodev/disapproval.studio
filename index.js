var express = require('express')
var app = express()
app.use(express.static('www'));
var port = process.env.port || 8080;
app.listen(port, function(){
    console.log('Listening on port ' + port); 
});