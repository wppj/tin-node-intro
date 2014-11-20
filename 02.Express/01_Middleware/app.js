var app = require('express')();
var port = process.env.PORT || 3000;

// Do standardowej aplikacji Express-a
// dodamy dwie „warstwy”. Każde zapytanie,
// dotyczyczy odpowiedniej ścieżki do zasobu
// wędruje przez kolejne zdefiniowane wartswy,
// aż natrafi na polecenie wygenerowania odpowiedzi.

var mw = require('./lib/midware')();
var amw = require('./lib/admin')();

app.use(mw);

app.use('/admin', amw);

app.get('/', function (req, res) {
    res.send('Hello World');
});

app.listen(port, function () {
    console.log('Serwer działa na porcie ' + port);
});
