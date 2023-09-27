const objectHash = require('object-hash');
const fs = require('fs');
const filePath = './data/articles.json';

class ArticleModel {
    constructor(article) {
        this.id = this.createArticleIdHash(article);
        this.title = article.title;
        this.body = article.body;
        this.keywords = article.keywords;
        this.likes = 0;
        this.published = true;
        this.featured = article.featured;
        this.author_name = article.author_name;
        this.published_date = article.published_date;
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
        fs.writeFileSync(filePath, JSON.stringify(articles));
    }

    static findById = (idArticle) => {
      const articles = ArticleModel.readArticles();
      const article = articles.find(a => a.id == idArticle);

      return article != null ? article : null;
    } 

    static deleteArticle = (id) => {
      const articles = this.readArticles();
      const indexForDelete = articles.findIndex(a => a.id == id);

      if (indexForDelete == null) {
        return null;
      }

      articles.splice(indexForDelete, 1);
      this.writeArticles(articles);
    }

    static update = (articleUpd) => {
      const articles = this.readArticles();
      const article = articles.find(a => a.id == articleUpd.id);
      const indexParaRemover = articles.findIndex(a => a.id == articleUpd.id);

      article.id = articleUpd.id;
      article.title = articleUpd.title;
      article.body = articleUpd.body;
      article.keywords = articleUpd.keywords;
      article.likes = articleUpd.likes || 0;
      article.published = articleUpd.published;
      article.featured = articleUpd.featured;
      article.author_name = articleUpd.author_name;
      article.published_date = articleUpd.published_date;

      articles.push(article);
      articles.splice(indexParaRemover, 1);

      ArticleModel.writeArticles(articles);
    }

    static top10MostLikedArticlers = () => {
      const articles = this.readArticles();
      articles.sort((a, b) => b.kb_liked_count - a.kb_liked_count);
      return articles.slice(0, 10);
    };
}

module.exports = ArticleModel;