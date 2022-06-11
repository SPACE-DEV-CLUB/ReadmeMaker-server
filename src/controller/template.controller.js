const db = require("../models");
const Template = db.Template;
const Component = db.Component;
const ComponentTags = db.ComponentTags;
const Op = db.sequelize.Op;

exports.update = (req, res) => {
  const id = req.params.id;
  Template.increment({ like: 1 }, { where: { id } })
    .then(() => {
      res.send({ res: true });
    })
    .catch((err) => {
      console.error(err);
    });
};

exports.relation = (req, res) => {
  const id = req.params.id;
  Component.findAll({
    include: [
      {
        model: ComponentTags,
      },
    ],
    where: { related_template: id },
  })
    .then((component) => {
      res.status(200).json(component);
    })
    .catch((err) => {
      console.error(err);
    });
};
