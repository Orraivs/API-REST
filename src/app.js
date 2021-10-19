const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const user = require('./routes/user');
const play = require('./routes/play');
const auth = require('./routes/auth')


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/user', user);
app.use('/playlist', play);
app.use('/auth', auth);


module.exports = app;

