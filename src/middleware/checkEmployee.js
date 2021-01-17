const { getUserAutenticated } = require("../utils/getUserAutenticated");

module.exports = async function checkCustomer(req, res, next) {
  const user = await getUserAutenticated(req);
  console.log(user.permissao_id);
  if (user.permissao_id === "3") {
    return next();
  }
  return res.status(403).json({ content: "Invalid permission" });
};
