const { Sequelize } = require('sequelize');
const DataTypes = require('sequelize');
const { Model } = DataTypes;



module.exports = class TemplateTags extends Model {
    static init(sequelize) {
        return super.init({
            title: {
                allowNull: false,
                type: DataTypes.STRING,
                validate: {
                    notEmpty: true,
                },
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                onUpdate: Sequelize.literal('CURRENT_TIMESTAMP'),
            }
        }, {
            modelName: 'TemplateTag',
            tableName: 'template_tags',
            charset: 'utf8mb4', //한글 + 이모티콘
            collate: 'utf8mb4_general_ci',//한글 저장
            timestamps: true,
            sequelize,
        })
    }
    static associate(db) {
        db.TemplateTags.belongsToMany(db.Template, { through: 'Theme_Tag', foreignKey: "template_tags_id" });
    }
}
