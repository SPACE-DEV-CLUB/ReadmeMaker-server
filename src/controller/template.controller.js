const db = require("../models");
const Template = db.Template;
const Component = db.Component;
const ComponentTags = db.ComponentTags;
const TemplateTags = db.TemplateTags;
const Op = db.sequelize.Op;

exports.all = async (req, res) => {
  try {
    const template = await Template.findAll({
      include: [
        {
          model: TemplateTags,
        },
      ],
    });
    res.status(200).json(template);
  } catch (err) {
    console.error(err);
  }
};

exports.template = async (req, res) => {
  try {
    const id = await req.params.id;
    const template = await Template.findAll({
      where: { id: id },
    });
    res.status(200).json(template);
  } catch (err) {
    console.error(err);
  }
};

exports.relation = async (req, res) => {
  try {
    const id = await req.params.id;
    const component = await Component.findAll({
      include: [
        {
          model: ComponentTags,
        },
      ],
      where: { related_template: id },
    });
    res.status(200).json(component);
  } catch (err) {
    console.error(err);
  }
};

exports.update = async (req, res) => {
  try {
    const id = await req.params.id;
    await Template.increment({ like: 1 }, { where: { id } });
    res.send({ res: true });
  } catch (err) {
    console.error(err);
  }
};
