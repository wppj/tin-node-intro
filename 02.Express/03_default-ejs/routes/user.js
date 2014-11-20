exports.list = function (userlist) {
    return function (req, res) {
        res.render('users', {
            title: 'Lista użytkowników',
            users: userlist
        });
    };
};
