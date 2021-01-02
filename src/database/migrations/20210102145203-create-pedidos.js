"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("pedidos", {
      id: {
        type: Sequelize.UUID,
        primarykey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      situacao_pedido_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "situacao_pedidos",
          key: "id",
        },
        onUpdate: "SET NULL",
        onDelete: "SET NULL",
      },
      forma_pagamento_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "formas_pagamentos",
          key: "id",
        },
        onUpdate: "SET NULL",
        onDelete: "SET NULL",
      },
      user_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "SET NULL",
        onDelete: "SET NULL",
      },
      codigo: {
        type: Sequelize.BIGINT,
        allowNull: false,
        unique: true,
        autoIncrement: true,
      },
      observacao: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("pedidos");
  },
};
