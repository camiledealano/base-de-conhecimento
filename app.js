const express = require('express');
const app = express();
// RODAR COM npx nodemon app.js para rodar nodemon

app.listen(9000, () => {
    console.log("Aplicação rodando em http://localhost:9000 !");
})

app.get("/", (req,res) => {
    res.send("app rodando")
})