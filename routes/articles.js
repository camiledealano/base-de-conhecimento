const express = require('express');
const router = express.Router();
const ArticleModel = require('../models/ArticleModel');
const filePath = './data/articles.json';
const fs = require('fs');

router.post('/create', (req,res) => {
  new ArticleModel(req.body);
  res.redirect('/')
});

router.get('/delete/:id', (req,res) => {
  ArticleModel.deleteArticle(req.params.id);
  res.redirect("/visualizar-artigos");
});

router.get('/list',  (_, res) => {
  const articles =  ArticleModel.readArticles();
  res.render('articles_list', {
    articles: articles
  });
});

router.get('/edit/:id', (req,res) => {
  var article = ArticleModel.findById(req.params.id);
  if(article == null){
    req.session.message = {
      type:'error',
      message:'Usuario não encontrado!'
    };
    res.redirect('/articles/list');
  };

  res.render('article_edit', {article: article});
})

module.exports = router;