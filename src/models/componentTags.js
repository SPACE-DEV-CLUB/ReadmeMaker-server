const DataTypes = require('sequelize');
const { Model } = DataTypes;



module.exports = class ComponentTags extends Model {
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
      modelName: 'ComponentTag',
      tableName: 'component_tags',
      charset: 'utf8mb4', //한글 + 이모티콘
      collate: 'utf8mb4_general_ci',//한글 저장
      sequelize,
    })
  }
  static associate(db) {
    db.ComponentTags.belongsToMany(db.Component, { through: 'Function_Tag', foreignKey: "component_tags_id" });
  }
}
