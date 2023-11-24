const mongoose = require('mongoose');

const { Schema } = mongoose;

const usersSchema = new Schema({
    author_name: String,
    author_email: String,
    author_user: String,
    author_pwd: String,
    author_level: String,
    author_status: Boolean,
    author_create_date: { type: Date, default: Date.now }
});
  
const Users = mongoose.model("Users". usersSchema)

module.exports = Users;
