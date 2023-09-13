const crypto = require('crypto');
const bcrypt = require('bcrypt');

class UserModel {
  constructor(user) {
    this.author_id = this.createUserId(user.author_email);
    this.author_name = user.author_name;
    this.author_email = user.author_email;
    this.author_user = this.createNameUser(user.author_email);
    this.author_pwd = this.createHashPassword(user.author_pwd);
    this.author_level = user.author_level;
    this.author_status = user.author_status;
  }

  createUserId(email) {
    const hash = crypto.createHash('sha256').update(email).digest('hex'); 
    return hash;
  }

  createNameUser(email) {
    const name = email.split('@')[0];
    return name;
  }

  createHashPassword(password) {
    const saltRounds = 10;
  
    try {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hash = bcrypt.hashSync(password, salt);
      return hash;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserModel;
