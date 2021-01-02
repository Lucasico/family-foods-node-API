const estadosService = require("./estados-service");

module.exports = (server) => {
  const PATHSERVICE = "/estados";

  server.get(`${PATHSERVICE}`, estadosService.list);
};
