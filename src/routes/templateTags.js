const express = require('express');
const router = express.Router();
const models = require('../models/index');

router.get('/', (req, res, next) => {
    models.TemplateTags.findAll({
        // where: {
        //     deletedAt: null
        // }
    })
        .then((templateTags) => {
            res.status(200).json(templateTags);
        });
});

module.exports = router;