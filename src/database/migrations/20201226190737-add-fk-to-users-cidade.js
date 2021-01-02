"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      "ALTER TABLE users ADD CONSTRAINT FK_cidade_id FOREIGN KEY (cidade_id) REFERENCES cidades(id)"
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
      "ALTER TABLE users DROP INDEX FK_cidade_id "
    );
  },
};
