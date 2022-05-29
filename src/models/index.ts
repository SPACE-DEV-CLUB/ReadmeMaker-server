import { Sequelize } from "sequelize";
var path = require('path');
var env = process.env.NODE_ENV || 'development';
var config = require(path.join(__dirname, '..', 'config', 'config.js'))[env];
const sequelize = new Sequelize({
  password: config.password,
  username: config.username,
  database: config.database,
  host: config.host,
  dialect: "mysql",
  timezone: "+09:00",
});

export default sequelize;
