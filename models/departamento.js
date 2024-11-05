const {sequelizeDb, sequelizeConfig} = require('./database')

// Criando a tabela
const departamento = sequelizeConfig.define(
    'departamento',
    {
        nome:{type:sequelizeDb.STRING},
        descricao:{type:sequelizeDb.TEXT}
    }
)

departamento.sync()
module.exports = departamento