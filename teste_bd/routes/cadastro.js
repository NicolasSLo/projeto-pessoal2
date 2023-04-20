const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('cadastro', {
        alert: ''
    })
})

router.post('/login', (req, res) => {

    if(req.body.nome == '' || req.body.senha == '' || req.body.senha2 == '' || req.body.senha != req.body.senha2){
        if (req.body.senha != req.body.senha2) {


            // res.redirect('/')
        } else {


            // res.render('main')
        }
    }else{
        Post.create({
            nome: req.body.nome,
            senha: req.body.senha,
            senha2: req.body.senha2
        })
        res.render('login')
    }

})

module.exports = router;