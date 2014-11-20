var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// parsuje formaty json, x-www-form-urlencoded i multipart/form-data
// app.use(express.bodyParser());

app.get('/', function (req, res) {
    if (req.cookies.remember) {
        res.send('Już Cię zapamietałem :). <a href="/forget">Kliknij tutaj</a> – żebym zapomniał.');
    } else {
        res.send('<form method="post"><p><input type="checkbox" name="remember"> Zapamiętaj mnie</p><input type="submit" value="Wyślij"></form>');
    }
});

app.get('/forget', function (req, res) {
    res.clearCookie('remember');
    // przekierowanie do URL będącego wartością Referer/Referrer
    res.redirect('back');
});

app.post('/', function (req, res) {
    var minute = 60000;
    if (req.body.remember) {
        res.cookie('remember', 1, {
            maxAge: minute
        });
    }
    res.redirect('back');
});

app.listen(port, function () {
    console.log('Serwer działa na porcie ' + port);
});
