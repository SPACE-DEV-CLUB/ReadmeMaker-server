import express, { Request, Response, NextFunction } from "express";
import sequelize from "./models";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.SERVER_PORT;

require("./router/component.routes")(app);
app.listen(port, async () => {
  console.log(`http sever on ${port}`);

  await sequelize
    .authenticate()
    .then(async () => {
      console.log("sequelize connection success");
    })
    .catch((e) => {
      console.log(e);
    });
});
