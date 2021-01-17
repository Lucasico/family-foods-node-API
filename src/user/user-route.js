const userService = require("./user-service");
const auth = require('../middleware/auth');

module.exports = (server) => {
  const PATHSERVICE = "/clientes";

  server.post(`${PATHSERVICE}`,auth, userService.store);
 
};
