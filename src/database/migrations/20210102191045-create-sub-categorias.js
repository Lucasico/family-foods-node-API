"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("sub_categorias", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primarykey: true,
        type: Sequelize.BIGINT,
        unique: true,
      },
      categoria_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "categorias",
          key: "id",
        },
        onUpdate: "SET NULL",
        onDelete: "SET NULL",
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      situacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("sub_categorias");
  },
};
