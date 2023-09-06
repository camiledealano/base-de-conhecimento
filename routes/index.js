import express from 'express'

var router = express.Router();

//Sempre que tivermos uma variável não utilizada como parametro, usamos o _ para deixar isso implícito
router.get("/", (_, res) => {
   res.redirect("/home");
});

 export default router