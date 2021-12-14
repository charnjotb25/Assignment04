
const port = process.env.PORT || 3000;
var express = require('express');
var app = express();

var api_routes = require('./routes.js');
app.use('/api', api_routes);

console.log(__dirname);
app.use('/homepage', express.static(__dirname + '/front_end'));


app.listen(port, function(){
    console.log("Server is running on port " + port)

});

