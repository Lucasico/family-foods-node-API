const userService = require("./user-service");

module.exports = (server) => {
  const PATHSERVICE = "/clientes";

  server.post(`${PATHSERVICE}`, userService.store);
};
