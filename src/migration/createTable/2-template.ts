import { Template } from "../../models/template";

console.log("======Create Template Table======");

const crateTableComponent = async () => {
  await Template.sync({ force: true })
    .then(() => {
      console.log("✅Success Create Template Table");
    })
    .catch((err) => {
      console.log("❗️Error in Create Template Table : ", err);
    });
};

crateTableComponent();
