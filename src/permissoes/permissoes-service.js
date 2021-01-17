const { Permissoes } = require("./permissoes-model");

module.exports = {
  list: async (req, res) => {
    try {
      const userPermissoes = await Permissoes.findAll();
      res.status(200).json({
        content: userPermissoes,
      });
    } catch (err) {
      console.log(`**** ${err} **** `);
      res.status(500).json({ err });
    }
  },
};
