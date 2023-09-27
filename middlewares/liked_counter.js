const fs = require('fs');

function likeCount(req, res, next) {
    const articleId = req.params.value;
    if (req.session.user == null) {
        req.session.message = {
            type:'danger',
            message:'Você precisa estar logado para curtir artigos!'
        };
        
        return res.redirect('/articles/detail/' + articleId);
    }

    const rawData = fs.readFileSync('./data/articles.json', 'utf-8');
    let articles = JSON.parse(rawData);

    articles.forEach(article => {
        if (article.id == articleId) {
            article.likes += 1;
        }
    })

    fs.writeFileSync('./data/articles.json', JSON.stringify(articles, null, 2), 'utf-8');
    res.redirect('/articles/detail/' + articleId);

    next();
}

module.exports = likeCount;