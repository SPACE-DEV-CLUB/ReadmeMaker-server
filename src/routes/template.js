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

router.put("/update/:id", templateController.update);

router.get("/:id", templateController.relation);

module.exports = router;
