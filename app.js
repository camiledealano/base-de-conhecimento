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

  // Sessão
  app.use(session({
    secret: '1234',
    resave: false,
    saveUninitialized: true
  }));

  //Middleware


// Rotas
app.use('/users', users);

app.get('/cadastro-usuario', (req, res) => {
  res.render('users_create'); // nome do arquivo EJS (sem a extensão .ejs)
});

app.get('/home', (req, res) => {
  res.render('index'); 
});



app.use('/controllers', express.static('./public/controllers'));
app.use('/controllers-views', express.static('./views/controllers'));
app.use('/views', express.static('./views'));

app.use('/login', express.static('./public/views/login.html'));
app.use('/cadastro-artigo', express.static('./views/views/cadastro-artigo.html'));

app.post('/login', authenticator);

app.post("/cadastrar-artigo", (req,res) => {
    const novoArtigo = req.body;
    novoArtigo.kb_id = objectHash(novoArtigo);

    let filePath = "./data/articles.json";
    let artigos = [];

    if (fs.existsSync(filePath)) {
        const conteudo = fs.readFileSync(filePath, 'utf-8');
        if (conteudo.trim() !== "") {
            artigos = JSON.parse(conteudo);
        }
    }

    artigos.push(novoArtigo);

    fs.writeFileSync(filePath, JSON.stringify(artigos, null, 2), { encoding: "utf-8" });

    res.json({ message: "Artigo cadastrado com sucesso" });
});


// Outros

app.listen(9000, () => {
    console.log("Aplicação rodando em http://localhost:9000");
});
