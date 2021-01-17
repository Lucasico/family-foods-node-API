const Yup = require("yup");

const schema = Yup.object().shape({
  password: Yup.string().required("Campo obrigatório!").min(5).max(15),
  email: Yup.string()
    .email("Formato de E-mail inválido")
    .required("Campo obrigatório"),
});
module.exports = schema;
