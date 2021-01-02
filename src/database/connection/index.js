const Sequelize = require("sequelize");
const dbConfig = require("../../../config/databaseConfig");

const sequelizeConnection = new Sequelize(dbConfig.development);
sequelizeConnection
  .authenticate()
  .then(console.log(`Conectado com sucesso ao POSTGRES!`))
  .catch((error) => {
    console.log(`** Erro ao conectar com o Postgres! **`);
    console.log(`** ${error} **`);
  });

module.exports = sequelizeConnection;
