
const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel'); 


// Rotas
router.post('/create', (req, res) => {
  const newUser = new UserModel(req.body);
  const users = UserModel.readUsers();
  users.push(newUser);
  UserModel.writeUsers(users);
  
  req.session.message = {
    type:'success',
    message:'Usuario cadastrado com sucesso!'
  };
  res.redirect('/users/list');
});

router.get('/list',  (_, res) => {
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
      message:'Usuario não encontrado!'
    };
    res.redirect('/users/list');
    
  };

  res.render('users_edit', {user: user})
})

router.post('/edit', (req,res) => {
  UserModel.update(req.body);
  req.session.message = {
    type:'success',
    message:'Usuario editado com sucesso!'
  };
  res.redirect('/users/list');
});

router.get('/delete/:id', (req,res) => {
  UserModel.findByIdAndRemove(req.params.id);
  req.session.message = {
    type:'success',
    message:'Usuario excluido com sucesso!'
  };
  res.redirect('/users/list');
  
});


module.exports = router;