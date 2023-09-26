
const express = require('express');
const router = express.Router();
const UserModel = require('../models/UserModel'); 
const isAdmin = require('../middlewares/isAdmin');

// Rotas
router.post('/create',isAdmin, (req, res) => {
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

router.get('/list',  (_, res) => {
  const users =  UserModel.readUsers();
  res.render('users_list', {
    users: users
  });
});

router.get('/edit/:id',isAdmin, (req,res) => {
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

router.post('/edit',isAdmin, (req,res) => {
  UserModel.update(req.body);
  req.session.message = {
    type:'success',
    message:'Usuário editado com sucesso!'
  };
  res.redirect('/users/list');
});

router.get('/delete/:id',isAdmin, (req,res) => {
  UserModel.findByIdAndRemove(req.params.id);
  req.session.message = {
    type:'success',
    message:'Usuário excluído com sucesso!'
  };
  res.redirect('/users/list');
  
});


module.exports = router;