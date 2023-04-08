import express from 'express'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import hbs from 'hbs';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()
const port = process.env.PORT;

//Handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials');

//Para servir contenido estatico 
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('home', {
        nombre: 'Javier',
        titulo: 'Curso de node'
    });
})
app.get('/generic', function (req, res) {
    res.render('generic', {
        nombre: 'Javier',
        titulo: 'Curso de node'
    });
})
app.get('/elements', function (req, res) {
    res.render('elements', {
        nombre: 'Javier',
        titulo: 'Curso de node'
    });
})
app.get('/hola-mundo', function (req, res) {
    res.send('<a href="/">Hola Mundo en su directorio</a>')
})

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/404.html');
})

app.listen(port)