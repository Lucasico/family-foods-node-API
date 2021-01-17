const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtKey = config.get("jwtSecret");

module.exports = function auth(req, res, next) {
  const token = req.header("Authorization");
  if (!token) {
    return res.status(401).json({
      content: "Acess denied. No token provided",
    });
  }
  try {
    const decoded = jwt.verify(token, jwtKey);
    req.user = decoded;
    next();

  } catch (exeption) {
    res.status(400).json({
      content: "Invalid token",
    });
  }
}

