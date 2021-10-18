const User = require('../models/User');
const bcrypt = require('bcrypt');
exports.find = (req, res, next) => {
    let params = {};
    params["user"] = req.body.user;
    User.find(params).then(users => {
        if (!users.length) return next();
        req.body.users = users;
        return next();
    }).catch(e => {
        req.body.e = e;
        next();
    })
}

exports.signin = async (req, res) => {
    /*
    req.user
    req.password
    */
    if (req.body.e) return res.status(500).send({ e });
    if (!req.body.users) return res.status(404).send({ message: 'NOT FOUND!' });
    let users = req.body.users[0];
    const match = await bcrypt.compare(req.body.password, users.password);
    res.send({
        message: 'La contraseña es: ' + users.password,
        match
    })


}