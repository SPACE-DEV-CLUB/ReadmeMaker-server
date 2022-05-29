require('dotenv').config();
const env = process.env;

const development = {
  username: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DB,
  host: env.MYSQL_HOST,
  dialect: "mysql",
};

module.exports = { development };