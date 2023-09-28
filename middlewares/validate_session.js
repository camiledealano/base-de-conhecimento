function validateSession(req, res, next) {
    if(req.session.user == null) {
        req.session.message = {
            type:'danger',
            message:'Você precisa estar logado!'
          };

        return res.redirect('/home');
    }

    if(req.session.user != null ){  
        if(req.session.user.author_level === 'administrador'){
            return next();
        } else{
            req.session.message = {
                type:'danger',
                message:'Você precisa ter permissão de administrador!'
              };
              
            return res.redirect('/home');
        }  
    } 

    if(Object.keys(req.body).length === 0){
        req.session.message = {
            type:'danger',
            message:'Você precisa ter permissão de administrador!'
          };

        return res.redirect('/home');
    }

    next();
}

module.exports = validateSession;