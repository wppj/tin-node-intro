exports.index = function (par) {
    return function (req, res) {
        res.render('index', {
            title: 'Express',
            txt: par
        });
    };
};
