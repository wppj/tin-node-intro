var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var cookieSession = require('cookie-session');

// definicja licznika jako „middleware”
var count = function (req, res, next) {
    var n;
    req.session.count = req.session.count || 0;
    // if (req.url !== '/favicon.ico') {
	    n = req.session.count++;
	    res.send('Odwiedzono ' + n + ' razy\n');
    // }
};

// obsługa sesji za pomocą ciasteczek
app.use(cookieSession({secret: '$ekretny $ekret'}));

// dodajemy nasz licznik jako kolejny „middleware”
app.use(count);

app.listen(port, function () {
    console.log('Serwer działa na porcie ' + port);
});
