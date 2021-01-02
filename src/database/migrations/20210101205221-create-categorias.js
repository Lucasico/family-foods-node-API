"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("categorias", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primarykey: true,
        type: Sequelize.BIGINT,
        unique: true,
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      situacao: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("categorias");
  },
};
