const DataTypes = require('sequelize');
const { Model } = DataTypes;

module.exports = class Template extends Model {
  static init(sequelize) {
    return super.init({
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      author: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
      image: {
        type: DataTypes.STRING,
      },
      link: {
        type: DataTypes.STRING,
      },
      related_comp: {
        type: DataTypes.JSON,
      },
      tags: {
        type: DataTypes.JSON,
      },
      like: {
        type: DataTypes.INTEGER,
      }
    }, {
      modelName: 'Template',
      tableName: 'templates',
      charset: 'utf8mb4', //한글 + 이모티콘
      collate: 'utf8mb4_general_ci',//한글 저장
      sequelize,
    })
  }
  // static associate(db) {
  //   db.Template.hasMany(db.Component);
  //   db.Component.belongsTo(db.Template);
  // }
}
