var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var logger = require('morgan');
var errorHandler = require('errorhandler');

var routes = require('./routes');
var user = require('./routes/user');
var path = require('path');


var env = process.env.NODE_ENV || 'development';
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

if ('development' == env) {
    // Parametry specyficzne dla trybu „deweloperskiego”
    app.use(logger('dev'));
    app.use(errorHandler());
};

// przekazujemy prosty argument do „widoku”
app.get('/', routes.index('wymiata'));
// przekazujemy tablicę do widoku
app.get('/users', user.list(['Janek', 'Kasia', 'Tomek']));

app.listen(port, function () {
    console.log("Express działa na porcie " + port);
});
