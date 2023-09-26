const express = require('express');
const ArticleModel = require('../models/ArticleModel');

var router = express.Router();

router.get("/", (_, res) => {
   const articles = ArticleModel.readArticles();
   const mostLikedArticles =  ArticleModel.top10MostLikedArticlers();
   res.render('index', {
      articles: articles,
      mostLikedArticles: mostLikedArticles 
   });
});

module.exports = router;

router.get("/admin/", (_, res) => {
   res.redirect("/home");
});

