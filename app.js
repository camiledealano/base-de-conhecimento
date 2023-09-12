// RODAR COM npx nodemon app.js para rodar nodemon
import express from 'express'
import routes from './routes/index.js'
import bodyParser from 'body-parser';
import session from 'express-session';
import authenticator from './middlewares/authenticator.js';
import objectHash from 'object-hash';
import fs from 'fs';

const app = express();

app.use(routes);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(session({
   secret: '1234',
   resave: false,
   saveUninitialized: true
}));

app.use('/controllers', express.static('./public/controllers'));
app.use('/controllers-views', express.static('./views/controllers'));


app.use('/views', express.static('./views'));
app.use('/home', express.static('./public/views/index.html'));
app.use('/cadastro-usuario', express.static('./public/views/cadastroUsuario.html'));
app.use('/login', express.static('./public/views/login.html'));
app.use('/cadastro-artigo', express.static('./views/views/cadastro-artigo.html'));

app.listen(9000, () => {
    console.log("Aplicação rodando em http://localhost:9000!");
});

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


