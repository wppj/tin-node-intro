var app = require('express')();

app.get('/', function (req, res) {
  res.send('Ahoj przygodo!');
});

app.get('/aqq', function (req, res) {
  res.send('AQQ');
});

app.listen(3000, function () {
    console.log('Serwer działa na porcie 3000.');
});
