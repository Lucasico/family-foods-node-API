"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("produtos", {
      id: {
        type: Sequelize.UUID,
        primarykey: true,
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        unique: true,
      },
      empresa_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "empresas",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      sub_categoria_id: {
        type: Sequelize.BIGINT,
        allowNull: false,
        references: {
          model: "sub_categorias",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      situacao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preco: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      tipo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      tamanho: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descricao: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      quantMinima: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      quantEstoque: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("produtos");
  },
};
