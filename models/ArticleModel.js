const objectHash = require('object-hash');

class ArticleModel {
    constructor(article) {
        this.article_id = this.createArticleIdHash(article);
        this.article_title = article.title;
        this.article_body = article.body;
        this.article.keywords = article.keywords;
        this.article_liked_count = article.liked_count;
        this.article_published = article.published;
        this.article_author_name = article.author_name;
        this.article_published_date = article.published_date;
    }

    createArticleIdHash(article) {
        this.article_id = objectHash(article);
    }
}

module.exports = ArticleModel;