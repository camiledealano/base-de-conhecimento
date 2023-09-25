const express = require('express');
const ArticleModel = require('../models/ArticleModel');

var router = express.Router();

router.get("/", (_, res) => {
   const articles = ArticleModel.readArticles();
   res.render('index', {articles: articles});
});

module.exports = router;