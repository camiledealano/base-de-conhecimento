//  const express = require('express');
//  const bodyParser =  require('body-parser');
//  const session = require('express-session');
//  const path = require('path');
 
//  const app = express();

//  app.use(bodyParser.urlencoded({extended: false}));
//  app.use(session({
//     secret: '1234',
//     resave: false,
//     saveUninitialized: true
//  }));

//  const isAutenticado = (req, res, next) => {
//     const isAuth = req.session.user === 'root';
//     if (!isAuth) {
//         return res.redirect("pagina de login")
//     } 
//     next();
//  }

//  app.use(express.static(path.join(__dirname, 'public')));

//  app.get("/login.html", (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'login.html'));
//  });

//  app.post('/login', (req,res) => {
//     const {username, password} = req.body;

//     if (username === 'root' && password === '1234') {
//         req.session.user = 'root'
//         res.redirect('pagina de sucesso');
//     } else {
//         res.redirect('pagina de login')
//     }
//  })

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

// app.listen(9000, () => {
// console.log(`Aplicação rodando em http://localhost:9000 !`);
// });