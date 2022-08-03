const DataTypes = require("sequelize");
const { Model } = DataTypes;

module.exports = class Component extends Model {
  static init(sequelize) {
    return super.init(
      {
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
        code: {
          type: DataTypes.STRING,
          validate: {
            notEmpty: true,
          },
        },
        variable: {
          type: DataTypes.STRING,
        },
        type: {
          type: DataTypes.STRING,
        },
        link: {
          type: DataTypes.STRING,
        },
        like: {
          type: DataTypes.INTEGER,
        },
      },
      {
        modelName: "Component",
        tableName: "components",
        charset: "utf8mb4", //한글 + 이모티콘
        collate: "utf8mb4_general_ci", //한글 저장
        sequelize,
      }
    );
  }
  static associate(db) {
    db.Component.belongsToMany(db.ComponentTags, {
      through: "Function_Tag",
      foreignKey: "component_id",
    });
    db.Component.belongsTo(db.Template);
  }
};
