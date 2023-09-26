function isAdmin(req, res, next) {
    if(req.session.user != null ){  
        if(req.session.user.author_level === 'admin'){
            return next();
        }
    } 

    req.session.message = {
        type:'error',
        message:'Você precisa ser um admin!'
    };

    return res.redirect('/home');
}

module.exports = isAdmin;