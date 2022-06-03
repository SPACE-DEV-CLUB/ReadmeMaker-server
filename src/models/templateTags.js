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
    }, {
      modelName: 'TemplateTag',
      tableName: 'template_tags',
      charset: 'utf8mb4', //한글 + 이모티콘
      collate: 'utf8mb4_general_ci',//한글 저장
      sequelize,
    })
  }
//   static associate(db) {
//     db.TemplateTags.belongsTo(db.Template);
//     db.Template.hasMany(db.TemplateTags);
//   }
}
