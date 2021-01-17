const Sequelize = require("sequelize");
const Model = Sequelize.Model;
const { Permissoes } = require("../permissoes/permissoes-model");
const { Cidades } = require("../cidades/cidades-model");
const sequelizeConnection = require("../database/connection");

class Users extends Model {}
Users.init(
  {
    id: {
      type: Sequelize.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: Sequelize.UUIDV4,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    rua: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    bairro: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    numero: {
      type: Sequelize.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: sequelizeConnection,
    modelName: "users",
    tableName: "users",
    freezeTableName: true,
    timestamps: true,
  }
);

Users.belongsTo(Permissoes, {
  foreignKey: {
    name: "permissao_id",
  },
});
Users.belongsTo(Cidades, {
  foreignKey: {
    name: "cidade_id",
  },
});
exports.Users = Users;
