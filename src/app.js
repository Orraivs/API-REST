const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const user = require('./routes/user');
const play = require('./routes/play');

localhost:3000/nombre/sneyder

app.get('/:nombre/:apellido',(req,res)=>{
    let {nombre, apellido} = req.params;
    res.status(404).send('Hola '+nombre+' '+ap)
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/user', user);
app.use('/playlist', play);


module.exports = app;

