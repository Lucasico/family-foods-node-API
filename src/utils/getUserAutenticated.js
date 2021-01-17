const jwt = require("jsonwebtoken");
const config = require("config");
const jwtKey = config.get("jwtSecret");
const { Users } = require("../user/user-model");

module.exports = {
  getUserAutenticated: async (req) => {
    try {
      const token = req.headers.authorization;
      const { id } = jwt.verify(token, jwtKey);
      const getUser = await Users.findOne({
        where: { id },
        attributes: [
          "id",
          "nome",
          "telefone",
          "rua",
          "bairro",
          "numero",
          "cidade_id",
          "permissao_id",
        ],
      });
      const setUser = {
        id: getUser.id,
        cidade_id: getUser.cidade_id,
        permissao_id: getUser.permissao_id,
        nome: getUser.nome,
        telefone: getUser.telefone,
        rua: getUser.rua,
        bairro: getUser.bairro,
        numero: getUser.numero,
      };
     return setUser;
    } catch (err) {
      console.log(`*** ${err} ***`);
    }
  },
};
