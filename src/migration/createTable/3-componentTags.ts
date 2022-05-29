import { ComponentTags } from "../../models/componentTags";

console.log("======Create Template Table======");

const crateTableComponent = async () => {
  await ComponentTags.sync({ force: true })
    .then(() => {
      console.log("✅Success Create Component Tags Table");
    })
    .catch((err) => {
      console.log("❗️Error in Create Component tags Table : ", err);
    });
};

crateTableComponent();
