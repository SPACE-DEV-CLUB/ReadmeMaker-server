const express = require("express");
const router = express.Router();
const models = require("../models/index");
const templateController = require("../controller/template.controller");

router.get("/", (req, res, next) => {
  models.Template.findAll({
    // where: {
    //     deletedAt: null
    // }
    include: [
      {
        model: models.TemplateTags,
      },
    ],
  }).then((template) => {
    res.status(200).json(template);
  });
});

router.get("/:id", (req, res, next) => {
  models.Component.findAll({
    // where: {
    //     deletedAt: null
    // }
    include: [
      {
        model: models.ComponentTags,
      },
    ],
    where: { related_template: req.params.id },
  }).then((component) => {
    res.status(200).json(component);
  });
});

router.put("/update/:id", templateController.update);

module.exports = router;
