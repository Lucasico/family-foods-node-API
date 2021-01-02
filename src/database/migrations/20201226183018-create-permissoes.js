"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("permissoes", {
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
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("permissoes");
  },
};
