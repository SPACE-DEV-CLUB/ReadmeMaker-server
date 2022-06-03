const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', (req, res, next) => {
    models.ComponentTags.findAll({
        // where: {
        //     deletedAt: null
        // }
    })
        .then((componentTags) => {
            res.status(200).json(componentTags);
        });
});

module.exports = router;