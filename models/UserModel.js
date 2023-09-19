const crypto = require('crypto');
const objectHash = require('object-hash');
const fs = require('fs');
const usersFilePath = './data/users.json';

class UserModel {
  constructor(user) {
    this.author_id = this.createUserId(user.author_email);
    this.author_name = user.author_name;
    this.author_email = user.author_email;
    this.author_user = this.createNameUser(user.author_email);
    this.author_pwd = objectHash(user.author_pwd);
    this.author_level = user.author_level;
    this.author_status = user.author_status;
  };

  createUserId(email) {
    const hash = crypto.createHash('sha256').update(email).digest('hex'); 
    return hash;
  };

  createNameUser(email) {
    const name = email.split('@')[0];
    return name;
  };

  static writeUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
  };
  
  static readUsers = () => {
    try {
      const data = fs.readFileSync(usersFilePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    };
  };

  static findById = (id) =>{
    const users = UserModel.readUsers();
    const user = users.find(u => u.author_id == id);

    if(user){
      return user;
    } else {
      return null;
    };
  }

  static update = (userUpdt) =>{
    const users = UserModel.readUsers();
    const user = users.find(u => u.author_id == userUpdt.author_id);
   
    const indexParaRemover = users.findIndex(autor => autor.author_id === userUpdt.author_id);

    user.author_id = userUpdt.author_id;
    user.author_name = userUpdt.author_name;
    user.author_email = userUpdt.author_email;
    user.author_user = userUpdt.author_user;
    user.author_pwd = userUpdt.author_pwd;
    user.author_level = userUpdt.author_level;
    user.author_status = userUpdt.author_status;

    users.push(user);

    if (indexParaRemover !== -1) {
      users.splice(indexParaRemover, 1);
    }
    UserModel.writeUsers(users);
  };

  static findByIdAndRemove = (id) => {
    const users = UserModel.readUsers();
    const indexParaRemover = users.findIndex(autor => autor.author_id === id);
    if (indexParaRemover !== -1) {
      users.splice(indexParaRemover, 1);
    }
    UserModel.writeUsers(users);
  };

};


module.exports = UserModel;
