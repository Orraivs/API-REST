const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const user = require('./routes/user');
const play = require('./routes/play');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', user);
app.use('/playlist', play);


module.exports = app;

