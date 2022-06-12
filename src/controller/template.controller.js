const db = require("../models");
const Template = db.Template;
const Component = db.Component;
const ComponentTags = db.ComponentTags;
const TemplateTags = db.TemplateTags;
const Op = db.sequelize.Op;

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

exports.update = (req, res) => {
    try{
        const id = await req.params.id;
        await Template.increment({ like: 1 }, { where: { id } });
        res.send({ res: true });
    } catch(err){
        console.error(err);
    }
};
