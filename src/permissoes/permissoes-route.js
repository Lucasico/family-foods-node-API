const permissoesService = require("./permissoes-service");

module.exports = (server) => {
  const PATHSERVICE = "/permissoes";

  server.get(`${PATHSERVICE}`, permissoesService.list);
};
