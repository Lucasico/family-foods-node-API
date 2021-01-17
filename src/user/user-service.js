const { Users } = require("./user-model");
const { Permissoes } = require("../permissoes/permissoes-model");
const { Cidades } = require("../cidades/cidades-model");
const getValidationErrors = require("../utils/getValidationErrors");
const schema = require("./user-validation-schema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const jwtKey = config.get("jwtSecret");

module.exports = {
  store: async (req, res) => {
    try {
      await schema.validate(req.body, { abortEarly: false });
      const checkEmail = await Users.findOne({
        where: { email: req.body.email },
      });
      if (checkEmail) {
        return res.status(400).json({ data: "Usuário já existe" });
      }
      const hash = await bcrypt.hash(req.body.password, 10);
      req.body.password = hash;
      const user = await Users.create(req.body);
      let userCreate = null;
      if (user) {
        userCreate = await Users.findOne({
          where: { id: user.id },
          include: [{ model: Permissoes }, { model: Cidades }],
          attributes: [
            "id",
            "email",
            "nome",
            "telefone",
            "rua",
            "bairro",
            "numero",
            "cidade_id",
            "createdAt",
            "updatedAt",
          ],
        });
      }
      res.status(200).json({
        content: userCreate,
      });
    } catch (err) {
      const errors = getValidationErrors(err);
      if (errors) return res.status(400).json(errors);
      console.log(`*** ${err} *** `);
      res.status(500).json({ err });
    }
  },

};
