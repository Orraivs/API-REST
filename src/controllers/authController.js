const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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
    if (req.body.e) return res.status(500).send({ e });
    if (!req.body.users) return res.status(404).send({ message: 'NOT FOUND!' });
    let user = req.body.users[0];
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
        jwt.sign({ user }, 'privateKey', function (err, token) {
            res.send({ token })
        });
    } else {
        res.send({ message: 'Invalid credentials!' })
    }
}

exports.verifyToken = (req, res) => {
    jwt.verify(req.body.token, 'privateKey', function (err, decoded) {
        if (err) return res.status(403).send({message: 'ERROR'});
        const user = {
            id: decoded.user._id,
            name: decoded.user.name,
            email: decoded.user.email,
            user: decoded.user.user,
            playlist: decoded.user.playlist
        }
        res.status(200).send({ user })
    });
}