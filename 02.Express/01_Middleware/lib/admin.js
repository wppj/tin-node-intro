module.exports = function () {
    // „next” poniżej oznacza kolejną wartswę – tutaj akurat jej nie
    // wykorzystujemy i moglibyśmy pominąć ją w liście parametrów
    return function (req, res, next) {
        switch (req.url) {
        case '/': // obsługa ścieżki „/admin/”
            res.header('Content-Type', 'text/plain; charset=utf-8');
            res.end('Spróbuj /admin/users');
            break;
        case '/users': // obsługa ścieżki „/admin/users/”
            res.header('Content-Type', 'application/json; charset=utf-8');
            res.json(['Błażej', 'Kasia', 'Tomek']);
            break;
        default:
            res.json({"err": "Nie ma takiej strony!"})
        }
    }
};
