const sequelizeDb = require("sequelize")
const sequelizeConfig = new sequelizeDb(
    'empresa', // O nome do banco de dados
    'root', //Nome de úsuario do banco 
    '', // Senha do banco de dados

    {
        dialect:'sqlite',
        storage:'./empresa.sqlite'
    }
)

module.exports = {sequelizeDb, sequelizeConfig}