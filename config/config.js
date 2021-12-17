require("dotenv").config();

const { DATABASE_URL } = process.env

module.exports = {
  development: {
    url: DATABASE_URL,
    dialect: 'postgres'
  },
  production: {
    url: DATABASE_URL,
    dialect: 'postgres'
  }
}

