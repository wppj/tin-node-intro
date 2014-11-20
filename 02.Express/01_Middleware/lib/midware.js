module.exports = function () {
    return function (req, res, next) {
        console.log('To ja – „warstwa pośrednicząca”!');
        if (req.method === 'POST') {
            res.end('Metodzie POST mówimy NIE!');
        } else {
            console.log('Zapytanie: ' + req.method + ' ' + req.url);
            // jeśli zapytanie odbyło się inną
            // metodą niż „POST”, to odwołujemy się
            // do kolejnej „warstwy”
            next();
        }
    }
};
