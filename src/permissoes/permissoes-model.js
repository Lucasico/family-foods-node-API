const Sequelize = require("sequelize");
const Model = Sequelize.Model;

const sequelizeConnection = require("../database/connection");

class Permissoes extends Model {}
Permissoes.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.BIGINT,
      unique: true,
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING,
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: "permissoes",
    tableName: "permissoes",
    timestamps: false,
    freezeTableName: true,
  }
);
exports.Permissoes = Permissoes;
