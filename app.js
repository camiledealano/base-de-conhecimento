const express = require('express');
const app = express();
// RODAR COM npx nodemon app.js para rodar nodemon
app.use("/home", express.static("./public/index.html"));
app.get("/", (req,res) => {
    res.redirect("/home");
})

app.listen(9000, () => {
    console.log("Aplicação rodando em http://localhost:9000 !");
})