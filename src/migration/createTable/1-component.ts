import { Component } from "../../models/component";

console.log("======Create Component Table======");

const crateTableComponent = async () => {
  await Component.sync({ force: true })
    .then(() => {
      console.log("✅Success Create Component Table");
    })
    .catch((err) => {
      console.log("❗️Error in Create Component Table : ", err);
    });
};

crateTableComponent();
