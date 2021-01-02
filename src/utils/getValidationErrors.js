const Yup = require("yup");

module.exports = (err) => {
  if (err instanceof Yup.ValidationError) {
    const ValidationError = {};
    err.inner.forEach((error) => {
      ValidationError[error.path] = error.message;
    });
    return ValidationError;
  }
};
