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

    static writeArticles = (articles) => {
      try {
        const data = fs.writeFileSync(filePath, JSON.stringify(articles, null, 2));
        return JSON.parse(data);
      } catch (error) {
        return [];
      }
    }

    static findById = (id) => {
      const articles = this.readArticles();
      const article = articles.find(a => a.article_id = id);

      return article != null ? article : null;
    } 

    static deleteArticle = (id) => {
      const articles = this.readArticles();
      const indexForDelete = articles.findIndex(a => a.kb_id == id);

      if (indexForDelete == null) {
        return null;
      }

      articles.splice(indexForDelete, 1);
      this.writeArticles(articles);
      
    }
}

module.exports = ArticleModel;