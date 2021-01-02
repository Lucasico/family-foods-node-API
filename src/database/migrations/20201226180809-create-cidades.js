"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cidades", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primarykey: true,
        type: Sequelize.BIGINT,
        unique: true,
      },
      estado_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "estados",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("cidades");
  },
};
