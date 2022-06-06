require('dotenv').config();
const env = process.env;

const development = {
  username: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DB,
  host: env.MYSQL_HOST,
  dialect: "mysql",
  timezone: "+09:00",
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  },
  define: {
    timestamps: true
  }
};
const production = {
  username: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DB,
  host: env.MYSQL_HOST,
  dialect: "mysql",
  timezone: "+09:00",
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  },
  define: {
    timestamps: true
  }
};
const test = {
  username: env.MYSQL_USER,
  password: env.MYSQL_PASSWORD,
  database: env.MYSQL_DB,
  host: env.MYSQL_HOST,
  dialect: "mysql",
  timezone: "+09:00",
  dialectOptions: {
    dateStrings: true,
    typeCast: true
  },
  define: {
    timestamps: true
  }
};



module.exports = { development, production, test };