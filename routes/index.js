var express = require('express');
var router = express.Router();

router.get("/cadastrarUsuario", (req,res) => {
   res.redirect("/cadastro-usuario")
})

 module.exports = router;