// RODAR COM npx nodemon app.js para rodar nodemon
import express from 'express'
import routes from './routes/index.js'

const app = express();

app.use(routes);
//Neste caso, como estamos servindo as páginas estaticamente, os arquivos js usados nela, também deve ser servidos estáticamente
//Note que o nome da "rota" é /controllers, sendo assim, na hora de importar no html, deve usar esse caminho e não o relativo da pasta
//Como padrão de código, todo código estático deve estar dentro da pasta public
app.use('/controllers', express.static('./public/controllers'));
app.use('/home', express.static('./public/views/index.html'));
app.use('/cadastro-usuario', express.static('./public/views/cadastroUsuario.html'));

app.listen(9000, () => {
    console.log("Aplicação rodando em http://localhost:9000!");
});