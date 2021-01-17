const Sequelize = require("sequelize");
const config = require("config");
const db = config.get("postgres");

const sequelizeConnection = new Sequelize(db);
sequelizeConnection
  .authenticate()
  .then(console.log(`Conectado com sucesso ao POSTGRES!`))
  .catch((error) => {
    console.log(`** Erro ao conectar com o Postgres! **`);
    console.log(`** ${error} **`);
  });

module.exports = sequelizeConnection;
