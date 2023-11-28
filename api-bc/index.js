const express = require('express');
const { default: mongoose } = require('mongoose');
const app = express()


require('dotenv').config();

// Db Connection

const conn = require("./src/db/conn")
conn();

// Routes

const routes = require("./src/routes/router");

app.use(express.json());
app.use("/api", routes);

app.listen(8080, function () { console.log('Aplicação executando na porta 8080!'); }); 