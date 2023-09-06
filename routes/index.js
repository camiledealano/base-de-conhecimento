import express from 'express'

var router = express.Router();

//Sempre que tivermos uma variável não utilizada como parametro, usamos o _ para deixar isso implícito
router.get("/", (_, res) => {
   res.redirect("/home");
});

//Não entendi o intuito dessa rota, até porque ela não faz nada, pode tranquilamente ser removida
/*router.get("/cadastrarUsuario", (_, res) => {
   res.redirect("/cadastro-usuario")
})*/

 export default router