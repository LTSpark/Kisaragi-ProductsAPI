require("dotenv").config();

const { DATABASE_URL } = process.env;

console.log(DATABASE_URL, "DATABASE_URL");

const DB_USERNAME = DATABASE_URL.split("//")[1].split(":")[0];
console.log(DB_USERNAME, "DB_USERNAME");
const DB_PASSWORD = DATABASE_URL.split("//")[1].split(":")[1].split("@")[0];
console.log(DB_PASSWORD, "DB_PASSWORD");
const DB_DATABASE = DATABASE_URL.split("//")[1].split("@")[1].split("/")[1];
console.log(DB_DATABASE, "DB_DATABASE");
const DB_HOST = DATABASE_URL.split("//")[1]
  .split("@")[1]
  .split("/")[0]
  .split(":")[0];

console.log(DB_HOST, "DB_HOST");

module.exports = {
  development: {
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
