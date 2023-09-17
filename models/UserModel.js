const crypto = require('crypto');
const objectHash = require('object-hash');

class UserModel {
  constructor(user) {
    this.author_id = this.createUserId(user.author_email);
    this.author_name = user.author_name;
    this.author_email = user.author_email;
    this.author_user = this.createNameUser(user.author_email);
    this.author_pwd = objectHash(user.author_pwd);
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
}

module.exports = UserModel;
