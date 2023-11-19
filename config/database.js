const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "e3G4A-cgfEfeG556e61d6GGb4BF-G3G1",
  DB_NAME = "railway",
  DB_HOST = "viaduct.proxy.rlwy.net",
} = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: "26508",
    dialect: "postgres",
  },
  test: {
    username: "postgres",
    password: "admin",
    database: "db_car_rental_development",
    host: "locahost",
    port: "5432",
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_NAME,
    host: DB_HOST,
    port: "26508",
    dialect: "postgres",
  },
};
