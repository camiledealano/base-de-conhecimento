// RODAR COM npx nodemon app.js para rodar nodemon
const express = require('express');
const app = express();

app.use(require('./routes/index.js'));
app.use('/home', express.static('./public/index.html'));
app.use("/cadastro-usuario", express.static('./public/cadastroUsuario.html'));

app.get("/", (req, res) => {
    res.redirect("/home");
});

app.listen(9000, () => {
    console.log("Aplicação rodando em http://localhost:9000!");
});