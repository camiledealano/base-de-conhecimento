const express = require('express');
const router = express.Router();
const ArticleModel = require('../models/ArticleModel');
const filePath = './data/articles.json';
const fs = require('fs');

router.post('/cadastrar-artigo', (req,res) => {
  const newArticle = new ArticleModel(req.body);
  res.redirect('/home')
})

router.get('/delete/:id', (req,res) => {
  const id = req.params.id;
  const artigos = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const indexIdParaExcluir = artigos.findIndex(artigo => artigo.kb_id == id);

  if (indexIdParaExcluir == null) {return}

  artigos.splice(indexIdParaExcluir, 1);
  fs.writeFileSync(filePath, JSON.stringify(artigos, null, 2));
  
  res.redirect("/visualizar-artigos");
})

module.exports = router;