// Modulos
const express = require('express');
const bodyParser = require('body-parser');
const users = require('./routes/users');
const authenticator = require('./middlewares/authenticator');
const session = require('express-session');

// Configuracoes
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use('/controllers', express.static('./public/controllers'));
app.use('/views', express.static('./views'));

// Sessão
app.use(session({
  secret: '1234',
  resave: false,
  saveUninitialized: true
}));

//Middlewares
app.post('/login/autenticar', authenticator);

// Rotas
app.use('/users', users);

app.get('/cadastro-usuario', (_, res) => {
  res.render('users_create');
});

app.get('/login', (_, res) => {
  res.render('login');
});

app.get('/home', (_, res) => {
  res.render('index'); 
});

app.get('/cadastro-artigo', (_, res) => {
  res.render('article_create');
})


// app.use('/controllers-views', express.static('./views/controllers'));

// app.use('/login', express.static('./public/views/login.html'));


// app.post("/cadastrar-artigo", (req,res) => {
//     const novoArtigo = req.body;
//     novoArtigo.kb_id = objectHash(novoArtigo);

//     let filePath = "./data/articles.json";
//     let artigos = [];

//     if (fs.existsSync(filePath)) {
//         const conteudo = fs.readFileSync(filePath, 'utf-8');
//         if (conteudo.trim() !== "") {
//             artigos = JSON.parse(conteudo);
//         }
//     }

//     artigos.push(novoArtigo);

//     fs.writeFileSync(filePath, JSON.stringify(artigos, null, 2), { encoding: "utf-8" });

//     res.json({ message: "Artigo cadastrado com sucesso" });
// });


// Porta onde roda a aplicação
app.listen(9000, () => {
    console.log("Aplicação rodando em http://localhost:9000");
});
