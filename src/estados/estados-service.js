const { Estados } = require("./estados-model");

module.exports = {
  list: async (req, res) => {
    try {
      const estados = await Estados.findAll();
      res.status(200).json({
        content: estados,
      });
    } catch (err) {
      console.log(`*** ${err} *** `);
      res.status(500).json({ err });
    }
  },
};
