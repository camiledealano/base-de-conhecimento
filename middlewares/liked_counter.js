const fs = require('fs');

function likeCount(req, _, next) {
    const articleId = req.params.id;
    let articles = JSON.parse(fs.writeFileSync("./data/articles.json", 'utf-8'));
    
    articles.forEach(article => {
        if(article.kb_id == articleId) {
            article.liked_count++;
        }
    })

    next();
}

module.exports = likeCount;