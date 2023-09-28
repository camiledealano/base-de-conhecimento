// Modulos
const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const articles = require('./routes/articles');
const index = require('./routes/index')
const authenticator = require('./middlewares/authenticator');
const validateSession = require('./middlewares/validate_session');
const session = require('express-session');
const flash = require('connect-flash');
const likeCount = require('./middlewares/liked_counter');

// Configuracoes
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use('/controllers', express.static('./views/controllers'));
app.use('/views', express.static('./views'));

// Sessão
app.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: true
}));

app.use(flash());

//Middlewares
app.use((req,res,next) =>{
  res.locals.message = req.session.message;
  res.locals.user = req.session.user;

  delete req.session.message;
  next()
});

// Rotas

app.get('/like-count/:value', likeCount);

app.post('/login/autenticar', authenticator);

app.use('/users', validateSession, users);

app.use('/articles', articles);

app.use('/home', index);


// Renderizar páginas

app.get('/login', (_, res) => {
  res.render('login');
});

app.get('/logout', (req, res) => {
     delete req.session.user;
     delete req.session.level;
     delete req.session.visibility;
     res.redirect('login');
});

app.get('/', (_, res) => {
  res.redirect('home');
});


// Porta onde roda a aplicação
app.listen(9000, () => {
    console.log("Aplicação rodando em http://localhost:9000");
});
