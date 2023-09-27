function isAdmin(req, res, next) {
    if (req.session.user.author_status === null) {
        req.session.message = {
            type:'danger',
            message:'Você precisa estar logado como administrador!'
        };
        return res.redirect('/home');
    }

    if(req.session.user != null ){  
        if(!req.session.user.author_level === 'adminstrador'){
            req.session.message = {
                type:'danger',
                message:'Você precisa ser um administrador!'
            };
            return res.redirect('/home');
        }      
    } 
    return next();
}

module.exports = isAdmin;