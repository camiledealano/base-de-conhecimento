const express = require('express');
const router = express.Router();
const ArticleModel = require('../models/ArticleModel');

const filePath = './data/articles.json';

router.post('/cadastrar-artigo', (req,res) => {
    const newArticle = new ArticleModel(req.body);
    res.json({message: "Artigo cadastrado com sucesso!", artigo: newArticle});
})

module.exports = router;