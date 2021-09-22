const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    user: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const user = mongoose.model('User', userSchema);

module.exports = user;