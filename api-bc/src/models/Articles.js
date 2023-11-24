const mongoose = require('mongoose');

const { Schema } = mongoose;

const articlesSchema = new Schema({
    id: String,
    title: String,
    body:String,
    keywords: String ,
    likes:  Number ,
    published: Boolean ,
    featured:  String ,
    author_name: String ,
    published_date: String,
});

// Criar o modelo com base no schema
const Articles = mongoose.model('Articles', articlesSchema);

module.exports = {
    Articles,
    articlesSchema,
};
