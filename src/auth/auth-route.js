const authService = require('./auth-service');

module.exports = (server) => {
  const PATHSERVICE = "/auth";

  server.post(`${PATHSERVICE}/login`, authService.login);
  
};
