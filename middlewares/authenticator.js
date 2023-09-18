const fs = require('fs');
const objectHash = require('object-hash');

function authenticate(req, res, next) {
    const user = req.body.user;
    const password = req.body.password;
    const dadosUsuario = JSON.parse(fs.readFileSync("./data/users.json", 'utf-8'));
    let usuarioEncontrado = false;

    for (let usuario of dadosUsuario) {
        if (usuario.author_name === user && usuario.author_pwd === objectHash(password)) {
            req.session.user = 'normal';
            usuarioEncontrado = true;
            break;
        }
    }

    if (user === 'admin' && password === '1234') {
        req.session.user = 'root';
        usuarioEncontrado = true; 
    }

    if (usuarioEncontrado) {
        res.redirect('/home');
    } else {
        res.redirect('/login');
    }
    
    next();
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