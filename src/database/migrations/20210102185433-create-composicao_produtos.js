"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("composicao_produtos", {
      produto_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "produtos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      composicao_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "composicoes",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("composicao_produtos");
  },
};
