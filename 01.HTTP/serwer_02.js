/*jshint node: true */
'use strict';

// Serwer realizujący „długie odpytywanie”
// test wydajności: ab -n 1000 -c 100 'http://127.0.0.1:3000/'
var http = require('http');

http.createServer(function (req, res) {
    setTimeout(function () {
        res.writeHead(200, {
            'Content-Type': 'text/plain; charset=utf8'
        });
        res.write('Odpowiedź - w dwie sekundy później.\n', 'utf8');
        res.end();
    }, 2000);
}).listen(3000, function () {
    console.log('Serwer działa na http://127.0.0.1:3000/');
});
