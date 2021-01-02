"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("funcionarios", "situacao", {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: "ativo",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("funcionarios", "situacao");
  },
};
