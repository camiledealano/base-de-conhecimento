const fs = require('fs');

function likeCount(req, res, next) {
    const articleId = req.params.id;
    const rawData = fs.readFileSync('./data/articles.json', 'utf-8');
    let articles = JSON.parse(rawData);
    
    if (req.session.user == null) {
        return;
    }

    articles.forEach(article => {
        if (article.kb_id == articleId) {
            article.kb_liked_count += 1;
        }
    })

    fs.writeFileSync('./data/articles.json', JSON.stringify(articles, null, 2), 'utf-8');
    
    res.redirect('/');
    next();

}

module.exports = likeCount;