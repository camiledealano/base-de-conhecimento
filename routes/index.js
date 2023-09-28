const express = require('express');
const ArticleModel = require('../models/ArticleModel');

var router = express.Router();

router.get("/", (req, res) => {
   console.log(req.query.q )
   const articles = ArticleModel.readArticles();
   const mostLikedArticles =  ArticleModel.top10MostLikedArticlers();
   const foundArticles = ArticleModel.findByKeywords(req.query.q);

   res.render('index', {
      articles: articles,
      mostLikedArticles: mostLikedArticles,
      foundArticles : foundArticles,
      query : req.query.q 
   });
});

module.exports = router;

router.get("/admin/", (_, res) => {
   res.redirect("/home");
});

