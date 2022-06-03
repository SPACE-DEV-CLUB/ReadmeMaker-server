const Sequelize = require('sequelize');
var path = require('path');
const component = require('./component');
const componentTags = require('./componentTags');
const template = require('./template');
const db = {};
var env = process.env.NODE_ENV || 'development';
var config = require(path.join(__dirname, '..', 'config', 'config.js'))[env];
const sequelize = new Sequelize({
  password: config.password,
  username: config.username,
  database: config.database,
  host: config.host,
  dialect: "mysql",
  pool: {
    max: 15,
    min: 5,
    idle: 20000,
    evict: 15000,
    acquire: 30000
  },
  timezone: "+09:00",
});

db.Component = component;
db.ComponentTags = componentTags;
db.Template = template;

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