const {sequelizeDb, sequelizeConfig} = require('./database') /* Estamos ultilizanso o  rercurso de desestruturação
 para importar apenas os módulos necessários*/
const departamento = require('./departamento')// Importando a tabela departamento

 // Criando a tabela
const funcionario = sequelizeConfig.define(
    'funcionario', // Nome da tabela
    {
        nome:{type:sequelizeDb.STRING},
        salario:{type:sequelizeDb.FLOAT},
        cargo:{type:sequelizeDb.STRING}
    }
)
/*
Não iremos criar os campos 'id_funcionario' e a chave estrangeira, pois o sequelize irá criar 
esses campos automaticamente, ou seja, tanto a chave primária quanto a chave estrangeira são criados pelo sequelize
*/

// Configurar a chave estrangeira
departamento.hasMany(funcionario,{
    onDelete:'CASCADE',
    onUpdate:'CASCADE'
})
funcionario.belongsTo(departamento)// Estou dizendo que funcionário pertence a apenas 1 departamento

funcionario.sync()
module.exports = funcionario 