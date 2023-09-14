function authenticate(req, res, next) {
    const { email, senha } = req.body;

    if (email === 'admin' && senha === '1234') {
        req.session.user = 'root';
        res.redirect('/home');
        next();
    } else {
        res.redirect('/login');
    }
}

//  const isAutenticado = (req, res, next) => {
//     const isAuth = req.session.user === 'root';
//     if (!isAuth) {
//         return res.redirect("pagina de login")
//     } 
//     next();
//  }

//fazer outro middleware pra verificar se ta autenticado ou n

//  app.get('/sucesso.html', isAutenticado, (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'sucesso.html'));
//   });
  
// app.get('/logout', (req, res) => {
//     req.session.user = null;
//     res.redirect('/login.html');
// });

// app.use((req, res) => {
// res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
// });



module.exports = authenticate;