const db = require('./db')

const Usuario = db.sequelize.define('usuarios',{
    nome:{
        type: db.Sequelize.TEXT
    },
    senha:{
        type: db.Sequelize.TEXT
    },
    senha2:{
        type: db.Sequelize.TEXT
    }
})

// Criar database
    // Usuario.sync({force: true})

// Criar table
    // Usuario.create({
    //     nome: 'Usuario Base',
    //     email: 'teste@gmail.com',
    //     senha: '123'
    // })

module.exports = Usuario