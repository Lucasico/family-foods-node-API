const { Users } = require("../user/user-model");
const schema = require("./auth-validation-schema");
const getValidationErrors = require("../utils/getValidationErrors");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const config = require('config');
const jwtKey = config.get('jwtSecret')

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      await schema.validate(req.body, { abortEarly: false });
      const user = await Users.findOne({
        where: { email },
        attributes: ["id", "email", "nome", "password"],
      });
      if (!user)
        return res.status(400).json({ content: "Email ou senha Inválido" });
        
      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        return res.status(400).json({ content: "Email ou senha Inválido" });
      }
     
     const token =  jwt.sign({id: user.id}, jwtKey, 
      {
          expiresIn: "24h"
      });

     res.status(200).json({
       content:user,
       token: token
     })

    } catch (err) {
      const errors = getValidationErrors(err);
      if (errors) return res.status(400).json(errors);
      console.log(`*** ${err} *** `);
      res.status(500).json({ err });
    }
  }
};
