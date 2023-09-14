const express = require('express');
const router = express.Router();
const ArticleModel = require('../models/ArticleModel');
const path = require('path');

const filePath = './data/articles.json';

router.post('/cadastrar-artigo', (req,res) => {
  const newArticle = new ArticleModel(req.body);
  res.redirect('/home')
})

module.exports = router;