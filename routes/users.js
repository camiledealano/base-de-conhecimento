
const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel'); 

// Rotas

router.get('/new', (_, res) => {
  res.render('users_create');
});

router.post('/create', (req, res) => {
  const newUser = new UserModel(req.body);
  const users = UserModel.readUsers();
  users.push(newUser);
  UserModel.writeUsers(users);
  
  req.session.message = {
    type:'success',
    message:'Usuário cadastrado com sucesso!'
  };
  res.redirect('/users/list');
});

router.get('/list', (_, res) => {
  const users =  UserModel.readUsers();
  res.render('users_list', {
    users: users
  });
});

router.get('/edit/:id', (req,res) => {
  var user = UserModel.findById(req.params.id);
  if(user == null){
    req.session.message = {
      type:'error',
      message:'Usuário não encontrado!'
    };
    res.redirect('/users/list');
    
  };

  res.render('users_edit', {user: user})
})

router.post('/edit', (req,res) => {
  UserModel.update(req.body);
  req.session.message = {
    type:'success',
    message:'Usuário editado com sucesso!'
  };
  res.redirect('/users/list');
});

router.get('/delete/:id', (req,res) => {
  UserModel.findByIdAndRemove(req.params.id);
  req.session.message = {
    type:'success',
    message:'Usuário excluído com sucesso!'
  };
  res.redirect('/users/list');
  
});


module.exports = router;