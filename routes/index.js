const express = require('express');

var router = express.Router();

router.get("/", (_, res) => {
   res.redirect("/home");
});



//Sempre que tivermos uma variável não utilizada como parametro, usamos o _ para deixar isso implícito
// router.get("/", (_, res) => {
//    res.redirect("/home");
// });

