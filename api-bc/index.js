const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

mongoose.connection.on('connected', () => {
  console.log('MongoDB conectado');
});

app.use(function(req, res, next){
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "content-type");
    res.setHeader("Content-Type", "application/json");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
   });


app.listen(8080, function () { console.log('Aplicação executando na porta 8080!'); }); 