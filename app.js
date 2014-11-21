'use strict';

var express = require('express');
var app = express();

var fs = require('fs');

var routes = fs.readdirSync('./routes');
routes.forEach(function (route) {
  require('./routes/' + route)(app);
});

app.listen(3000);
console.log('app listen at port 3000');