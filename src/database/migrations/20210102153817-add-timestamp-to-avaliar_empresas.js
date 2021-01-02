"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("avaliar_empresas", "created_at", {
      type: Sequelize.DATE,
      allowNull: false,
    });
    await queryInterface.addColumn("avaliar_empresas", "updated_at", {
      type: Sequelize.DATE,
      allowNull: false,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("avaliar_empresas", "created_at");
    await queryInterface.removeColumn("avaliar_empresas", "updated_at");
  },
};
