"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("item_pedidos", {
      id: {
        type: Sequelize.UUID,
        primarykey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      pedido_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "pedidos",
          key: "id",
        },
        onUpdate: "SET NULL",
        onDelete: "SET NULL",
      },
      produto_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "produtos",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      desconto: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
      valor: {
        type: Sequelize.DOUBLE,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("item_pedidos");
  },
};
