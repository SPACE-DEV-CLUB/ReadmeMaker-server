const db = require("../models");
const Component = db.Component;
const Op = db.sequelize.Op;

exports.update = (req, res) => {
  const id = req.params.id;
  Component.increment({ like: 1 }, { where: { id } })
    .then(() => {
      res.send({ res: true });
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.relation = (req, res) => {
  const id = req.params.id;
};
