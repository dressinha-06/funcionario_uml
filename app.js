//Carregar oss módulos
const express = require("express")
const handbars = require("express-handlebars")

const app = express()
const porta = 5500

// Configurar o express para receber dados do formulário
app.use(express.urlencoded({externded:true}))
app.use(express.json())

//Exibindo informações na tela
app.get("/",(req, res)=>{
    res.send("<h1>Tudo Funcionando</h1>")
})

// Carregando rotas
const funcionarioRouter = require('./routes/funcionario')

// Utilizando as rotas
app.use('/funcionario',funcionarioRouter)

//Exibindo informações na tela
app.get("/",(req, res)=>{
    res.send("<h1> TUdo Funcionario</h1>")
})



//Executando o servidor
app.listen(porta, ()=>{
    console.log("Servidor executando na porta", porta)
})