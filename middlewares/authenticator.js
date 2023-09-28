const fs = require('fs');
const objectHash = require('object-hash');

function authenticate(req, res, next) {
    const dadosUsuario = JSON.parse(fs.readFileSync("./data/users.json", 'utf-8'));
    let usuarioEncontrado = false;
    for (let usuario of dadosUsuario) {
        if (usuario.author_email === req.body.user && usuario.author_pwd === objectHash(req.body.password)) {
            req.session.user = usuario;
            usuarioEncontrado = true;
          
            if(usuario.author_status === 'off'){
                req.session.message = {
                    type:'danger',
                    message:'Este usuário está offline!'
                };

                return res.redirect('/login');  
            }
            break;
        }
    }
    

    if (usuarioEncontrado) {
        return res.redirect('/home');
    } else {
        req.session.message = {
            type:'danger',
            message:'Usuário não encontrado!'
          };
        return res.redirect('/login');
    }
    
}

module.exports = authenticate;