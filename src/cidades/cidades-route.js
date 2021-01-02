const cidadeService = require("./cidades-service");

module.exports = (server) => {
  const PATHSERVICE = "/estados/";

  server.get(`${PATHSERVICE}:id/cidades`, cidadeService.list);
};
