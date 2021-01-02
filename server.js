const express = require("express");
const cors = require("cors");

const server = express();

server.use(cors());
server.use(express.json());

require("./config/routesConfig/routesConfig")(server);

server.listen(3555);

module.exports = server;
