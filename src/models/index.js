const Sequelize = require('sequelize');
var path = require('path');
const component = require('./component');
const componentTags = require('./componentTags');
const template = require('./template');
const templateTags = require('./templateTags');
const db = {};
var env = process.env.NODE_ENV || 'development';
var config = require(path.join(__dirname, '..', 'config', 'config.js'))[env];
const sequelize = new Sequelize({
  password: config.password,
  username: config.username,
  database: config.database,
  host: config.host,
  dialect: "mysql",
  dialectOptions: {
    connectTimeout: 30000,
  },
  pool: {
    max: 15,
    min: 5,
    idle: 20000,
    evict: 15000,
    acquire: 30000
  },
  retry: {
    match: [
      /ETIMEDOUT/,
      /EHOSTUNREACH/,
      /ECONNRESET/,
      /ECONNREFUSED/,
      /ETIMEDOUT/,
      /ESOCKETTIMEDOUT/,
      /EHOSTUNREACH/,
      /EPIPE/,
      /EAI_AGAIN/,
      /SequelizeConnectionError/,
      /SequelizeConnectionRefusedError/,
      /SequelizeHostNotFoundError/,
      /SequelizeHostNotReachableError/,
      /SequelizeInvalidConnectionError/,
      /SequelizeConnectionTimedOutError/
    ],
    max: 5
  },
  timezone: "+09:00",
});

db.Component = component;
db.ComponentTags = componentTags;
db.Template = template;
db.TemplateTags = templateTags;

Object.keys(db).forEach(modelName => {
  db[modelName].init(sequelize);
});

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;