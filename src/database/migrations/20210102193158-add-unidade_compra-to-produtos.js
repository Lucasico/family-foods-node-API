"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("produtos", "unidade_compra", {
      type: Sequelize.STRING,
      allowNull: false,
    });
    await queryInterface.addColumn("produtos", "pertence_estoque", {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("produtos", "unidade_compra");
    await queryInterface.removeColumn("produtos", "pertence_estoque");
  },
};
