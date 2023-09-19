
const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel'); 


// Rotas
router.post('/add', (req, res) => {
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

router.get('/list',  (req, res) => {
  const users =  UserModel.readUsers();
  res.render('users_list', {
    users: users
  });
});

router.get('/edit/:id', (req,res) => {
  var user = UserModel.findById(req.params.id);
  if(user){
    res.render('users_edit', {user: user})
  };

  req.session.message = {
    type:'error',
    message:'Usuario não encontrado!'
  };
  res.redirect('/users/list');
})

router.post('/edit', (req,res) => {
  UserModel.update(req.body);
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