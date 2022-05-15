import { Sequelize } from "sequelize";
import config from "../config/config";

const sequelzie = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: "mysql",
  timezone: "+09:00",
});

export default sequelzie;
