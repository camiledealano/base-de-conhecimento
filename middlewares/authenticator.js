const fs = require('fs');
const objectHash = require('object-hash');
const { use } = require('../routes/users');

function authenticate(req, res, next) {
    if(req.session.user != null ){  
        if(req.session.user.author_level === 'administrador'){
            return next();
        }else{
            req.session.message = {
                type:'error',
                message:'Você precisa ter permissão de administrador!'
              };
              
            return res.redirect('/home');
        }  
    } 

    if(Object.keys(req.body).length === 0){
        req.session.message = {
            type:'error',
            message:'Você precisa ter permissão de administrador!'
          };

        return res.redirect('/home');
    }

    const dadosUsuario = JSON.parse(fs.readFileSync("./data/users.json", 'utf-8'));
    let usuarioEncontrado = false;
    for (let usuario of dadosUsuario) {
        if (usuario.author_email === req.body.user && usuario.author_pwd === objectHash(req.body.password)) {

            req.session.user = usuario;

            usuarioEncontrado = true;
            if(usuario.author_level === 'administrador'){
                req.session.visibility = true;
            }
            break;
        }
    }
    

    if (usuarioEncontrado) {
        res.redirect('/home');
    } else {
        req.session.message = {
            type:'error',
            message:'Usuário não encontrado!'
          };
        res.redirect('/login');
    }
    
    next();
}

module.exports = authenticate;