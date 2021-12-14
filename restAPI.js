
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


















/*
REAL

const port = process.env.PORT || 3000;
var express = require('express');
var app = express();

var api_routes = require('./routes.js');
app.use('/api', api_routes);

console.log(__dirname);
app.use('/homepage', express.static(__dirname + '/front_end'));


// Start the server.

app.listen(port, function(){
    console.log("Server is running on port " + port)

});
*/


/*
var express = require('express');
var app = express();

var api_routes = require('./routes.js');
app.use('/api', api_routes);

console.log(__dirname);
app.use('/demo', express.static(__dirname + '/front_end'));


// Start the server.

app.listen(3000, function(){
    console.log("Server is running")

});
*/








/*
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

//api_route module being used in this file so that creating new routes is easier in the future.
var api_routes = require('./routes.js');
app.use('/api', api_routes);

app.use('/home',express.static('front_end'));

app.listen(port, function() {
  console.log('Server is running on port ' + port);
});
*/






/*
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

//api_route module being used in this file so that creating new routes is easier in the future.
var api_routes = require('.routes.js');
app.use('/api', api_routes);

app.use('/demo',express.static('front_end'));

app.listen(port, function() {
  console.log('Server is running on port ' + port);
});
*/
//

/*
var express = require ('express');
var app = express();

app.get('/', function(req, res) {
  res.send('<h1>Hello World!</h1>');
});

app.get('/login', (req,res) => {
  res.send('<h2>This is the login route</h2>')
})

app.listen(3000, function(){
  console.log('app is listening on port 3000!');
});
*/

/*
const port = process.env.PORT || 3000;
const express = require('express');
const app = express();

//api_route module being used in this file so that creating new routes is easier in the future.
var api_routes = require('./app_routes.js');
app.use('/api', api_routes);

app.use('/home',express.static('front_end'));

app.listen(port, function() {
  console.log('Example app listening on port 3000!');
});
*/
