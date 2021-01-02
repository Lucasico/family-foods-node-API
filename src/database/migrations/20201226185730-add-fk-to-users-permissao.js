"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      "ALTER TABLE users ADD CONSTRAINT FK_permissao_id FOREIGN KEY (permissao_id) REFERENCES permissoes(id)"
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      "ALTER TABLE users DROP INDEX FK_permissao_id "
    );
  },
};
