const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const sequelizeConnection = require("../database/connection");

class Cidades extends Model {}

Cidades.init(
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
    modelName: "cidades",
    tableName: "cidades",
    freezeTableName: true,
    timestamps: false,
  }
);

exports.Cidades = Cidades;
