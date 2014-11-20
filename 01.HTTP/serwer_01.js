/*jshint node: true */
'use strict';

// prosty „statyczny serwer HTTP”
// test: http://127.0.0.1:3000/
var http = require('http');

http.createServer(function (req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=utf8'
    });
    res.write("Oto node.js w działaniu!\n", 'utf8');
    console.log('IP: ' + req.connection.remoteAddress + ', URL: ' + req.url);
    setTimeout(function () {
        res.end('To była odpowiedź – pa pa!');
    }, 5000);
    
}).listen(3000, function () {
    console.log('Serwer działa na http://127.0.0.1:3000/');
});
