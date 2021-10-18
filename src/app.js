const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const user = require('./routes/user');
const play = require('./routes/play');
const auth = require('./routes/auth')

app.get('/:nombre/:apellido',(req,res)=>{
    let {nombre, apellido} = req.params;
    res.status(404).send('Hola '+nombre+' '+ap)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', user);
app.use('/playlist', play);
app.use('/auth', auth);


module.exports = app;

