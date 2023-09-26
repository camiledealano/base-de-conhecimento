function isAdmin(req, res, next) {
    if(req.session.user != null ){  
        if(!req.session.user.author_level === 'adminstrador'){
            req.session.message = {
                type:'danger',
                message:'Você precisa ser um administrador!'
            };
            return res.redirect('/home');
        }

        if (!req.session.user.author_status === 'Ativo') {
            req.session.message = {
                type:'danger',
                message:'Você precisa estar ativo!'
            };
            return res.redirect('/home');
        }
    } 
    next();
}

module.exports = isAdmin;