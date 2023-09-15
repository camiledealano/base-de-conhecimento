const fs = require('fs');
const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel'); 
const usersFilePath = './data/users.json';

// Rotas
router.post('/cadastrar', (req, res) => {
  const newUser = new UserModel(req.body);
  const users = readUsers();
  users.push(newUser);
  writeUsers(users);
  req.flash('success_msg','Usuario criado com sucesso!');
  res.render('users_create');
});

router.get('/Listar',  (req, res) => {
  const users = readUsers();
  res.render('users_edit', {
    users: users
  });
});

// Funcoes 

const writeUsers = (users) => {
    fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2), 'utf8');
};

const readUsers = () => {
    try {
      const data = fs.readFileSync(usersFilePath, 'utf8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
};




module.exports = router;