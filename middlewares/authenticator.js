function authenticate(req, res, next) {
    const { username, password } = req.body;
    console.log(req);

    // if (username === 'admin' && password === '1234') {
    //     req.session.user = 'root';
    //     res.status(200).send("Autenticado com sucesso!")
    //     next();
    // } else {
    //     res.status(401).send('Autenticação falhou');
    // }
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