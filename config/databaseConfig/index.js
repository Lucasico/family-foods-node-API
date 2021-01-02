module.exports = {
  development: {
    dialect: "postgres",
    host: "localhost",
    username: "postgres",
    password: "Postgres2018!",
    database: "family_foods",
    logging: false,
    define: {
      timestamps: true,
      underscored: true,
    },
  },
  production: {
    //indefinido ainda
  },
};
