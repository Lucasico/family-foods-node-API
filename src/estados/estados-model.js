const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const { Cidades } = require("../cidades/cidades-model");
const sequelizeConnection = require("../database/connection");

class Estados extends Model {}

Estados.init(
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
    modelName: "estados",
    tableName: "estados",
    freezeTableName: true,
    timestamps: false,
  }
);
Estados.hasMany(Cidades);

exports.Estados = Estados;
