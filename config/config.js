require("dotenv").config();

const { DATABASE_URL } = process.env;

console.log(DATABASE_URL, "DATABASE_URL");

const DB_USERNAME = DATABASE_URL.split("//")[1].split(":")[0];
const DB_PASSWORD = DATABASE_URL.split("//")[1].split(":")[1].split("@")[0];
const DB_DATABASE = DATABASE_URL.split("//")[1].split("@")[1].split("/")[1];
const DB_HOST = DATABASE_URL.split("//")[1]
  .split("@")[1]
  .split("/")[0]
  .split(":")[0];

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    host: DB_HOST,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
};
