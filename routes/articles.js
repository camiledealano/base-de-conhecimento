const express = require('express');
const router = express.Router();
const ArticleModel = require('../models/ArticleModel');

router.post('/create', (req, res) => {
  const newArticle = new ArticleModel(req.body);
  const articles = ArticleModel.readArticles();
  articles.push(newArticle);
  ArticleModel.writeArticles(articles);

  req.session.message = {
    type: 'sucess',
    message: "Artigo cadastrado com sucesso!"
  }

  res.redirect('/articles/list')
});

router.get('/delete/:id', (req,res) => {
  ArticleModel.deleteArticle(req.params.id);
  req.session.message = {
    type:'success',
    message:'Artigo excluído com sucesso!'
  };
  res.redirect("/articles/list");
});

router.get('/list',  (_, res) => {
  const articles =  ArticleModel.readArticles();
  res.render('articles_list', {
    articles: articles
  });
});

router.get('/edit/:id', (req,res) => {
  const article = ArticleModel.findById(req.params.id);
  if(article == null){
    req.session.message = {
      type:'error',
      message:'Artigo não encontrado!'
    };
    res.redirect('/articles/list');
  };

  res.render('article_edit', {article: article});
})

router.post('/edit', (req, res) => {
  ArticleModel.update(req.body)
  req.session.message = {
    type: 'sucess',
    message: 'Artigo editado com sucesso!'
  };
   res.redirect('/articles/list');
})

router.get('/detail/:id', (req,res) => {
  const article = ArticleModel.findById(req.params.id);
  if(article == null){
    req.session.message = {
      type:'error',
      message:'Artigo não encontrado!'
    };
    res.redirect('/');
  };

  res.render('article_details', {article: article});
})

module.exports = router;