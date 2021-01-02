const { Cidades } = require("./cidades-model");

module.exports = {
  list: async (req, res) => {
    try {
      const { id } = req.params;
      const cidades = await Cidades.findAll({
        where: {
          estado_id: id,
        },
        order: [["nome", "ASC"]],
      });
      res.status(200).json({
        content: cidades,
      });
    } catch (err) {
      console.log(`*** ${err} *** `);
      res.status(500).json({ err });
    }
  },
};
