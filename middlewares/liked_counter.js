const fs = require('fs');

function likeCount(req, res, next) {
    console.log(req.params.value)
    const articleId = req.params.value;
    const rawData = fs.readFileSync('./data/articles.json', 'utf-8');
    let articles = JSON.parse(rawData);
    

    articles.forEach(article => {
        if (article.id == articleId) {
            article.likes += 1;
        }
    })

    fs.writeFileSync('./data/articles.json', JSON.stringify(articles, null, 2), 'utf-8');
    res.redirect(req.header('Referer') || '/');

    next();
}

module.exports = likeCount;