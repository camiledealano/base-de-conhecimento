const objectHash = require('object-hash');
const fs = require('fs');
const filePath = './data/articles.json';

class ArticleModel {
    constructor(article) {
        this.article_id = this.createArticleIdHash(article);
        this.article_title = article.title;
        this.article_body = article.body;
        this.article_keywords = article.keywords;
        this.article_liked_count = 0;
        this.article_published = true;
        this.article_featured = 'off';
        this.article_author_name = article.author_name;
        this.article_published_date = article.published_date;
    }

    createArticleIdHash(article) {
        return objectHash(article);
    }

    static readArticles = () => {
        try {
          const data = fs.readFileSync(filePath, 'utf8');
          return JSON.parse(data);
        } catch (error) {
          return [];
        };
      };
}

module.exports = ArticleModel;