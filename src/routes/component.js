const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', (req, res, next) => {
    models.Component.findAll({
        // where: {
        //     deletedAt: null
        // }
        include: [{
            model: models.ComponentTags
        }]
    })
        .then((component) => {
            res.status(200).json(component);
        });
});

module.exports = router;