// Modulos
const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const articles = require('./routes/articles');
const authenticator = require('./middlewares/authenticator');
const session = require('express-session');
const flash = require('connect-flash');
const fs = require('fs');

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
  res.locals.success_msg =  req.flash('success_msg')
  res.locals.error_msg =  req.flash('error_msg')
  next()
});

// Rotas
app.post('/login/autenticar', authenticator);

app.use('/users', users);

app.use('/article', articles);

// Renderizar páginas

app.get('/visualizar-artigos', (_, res) => {
  let artigos = JSON.parse(fs.readFileSync("./data/articles.json", 'utf-8'));
  res.render('article_list', {artigos});
})

app.get('/cadastro-usuario', (_, res) => {
  res.render('users_create');
});

app.get('/login', (_, res) => {
  res.render('login');
});

app.get('/home', (_, res) => {
  res.render('index'); 
});

app.get('/', (_, res) => {
  res.render('index'); 
});

app.get('/cadastro-artigo', (_, res) => {
  res.render('article_create');
})

// Porta onde roda a aplicação
app.listen(9000, () => {
    console.log("Aplicação rodando em http://localhost:9000");
});
