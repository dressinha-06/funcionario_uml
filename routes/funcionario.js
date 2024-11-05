const express = require('express')
const router = express.Router()

const funcionario = require('../models/funcionario')
const departamento = require('../models/departamento')

// Criando as rotas
// 1ª Rota - Inseri dados na tabela
router.post('/store',async(req, res)=>{
    const resultado = await funcionario.create({
        nome:'Joana Darc',
        salario:3000,
        cargo:'supervisora',
        departamento:1 // Esse campo é a chave estrangeira
    })
})

// 2ª Rota - Exibir a página inicial do funcionário
router.get('/',(req, res)=>{
    res.send("<h1>Página inicial do funcionário</h1>")
})

// 3ª Rota - Consultar dados da tabela
router.get('/shaw',async(req, res)=>{
    const resultado = await funcionario.findAll()

    if(resultado){
        console.log(resultado)
    }

    else{
        console.log("Não foi possivel exibir os dados")
    }
})

module.exports = router 