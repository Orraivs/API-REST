const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    user: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    playlist: [{
        name: {
            type: String,
            required: true
        },
        songs: [String]
    }]
});

const user = mongoose.model('User', userSchema);

module.exports = user;