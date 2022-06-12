const express = require("express");
const router = express.Router();
const models = require("../models/index");
const templateController = require("../controller/template.controller");

router.get("/:id", templateController.template);

router.get("/component/:id", templateController.relation);

router.put("/update/:id", templateController.update);

module.exports = router;
