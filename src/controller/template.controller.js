const db = require("../models");
const Template = db.Template;
const Op = db.sequelize.Op;

exports.update = (req, res) => {
    const id = req.params.id;
    Template.increment({ like: 1 }, { where: { id } })
        .then(() => {
            res.send({ res: true })
        })
        .catch((err) => {
            console.error(err);
        })
}