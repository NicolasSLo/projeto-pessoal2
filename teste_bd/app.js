const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const routeCadastro = require('./routes/cadastro')
const handlebars = require('express-handlebars')
const { engine } = require ('express-handlebars');
const app = express()

// body-parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Config Hendlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars')


// arquivo estatico: css, js
app.use(express.static(path.join(__dirname, 'public')))

// Rotas
app.use('/', routeCadastro)
app.post('/login', routeCadastro)


// Servidor
app.listen(3000, () => {
    console.log('Servidor Rodadando')
})