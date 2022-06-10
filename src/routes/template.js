const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', (req, res, next) => {
    models.Template.findAll({
        // where: {
        //     deletedAt: null
        // }
        include: [{
            model: models.TemplateTags
        }]
    })
        .then((template) => {
            res.status(200).json(template);
        });
});

module.exports = router;