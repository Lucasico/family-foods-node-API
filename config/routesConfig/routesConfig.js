const server = require("../../server");

module.exports = (server) => {
  //require o arquivo de rotas do recurso da aplicação passando o server como parametro

  //clientes routes
  require("../../src/user/user-route")(server);

  //permissoes
  require("../../src/permissoes/permissoes-route")(server);

  //estados
  require("../../src/estados/estados-route")(server);

  //cidades
  require("../../src/cidades/cidades-route")(server);
};
