const { Permissoes } = require("./permissoes-model");
const { Users } = require("../user/user-model");

module.exports = {
  list: async (req, res) => {
    try {
      const userPermissoes = await Permissoes.findByPk(1, {
        include: [{ model: Users }],
      });
      res.status(200).json({
        content: userPermissoes,
      });
    } catch (err) {
      console.log(`*** ${err} *** `);
      res.status(500).json({ err });
    }
  },
};
