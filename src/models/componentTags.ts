import { DataTypes, Model, Association } from "sequelize";
import sequelize from "./index";
import { Component } from './component';

interface ComponentProps {
  // id: string;
}

export class ComponentTags extends Model<ComponentProps> {
  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public static associations: {
    componentHasManyTags: Association<Component, ComponentTags>;
  };
}

ComponentTags.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: {
      allowNull: false,
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
  },
  {
    timestamps: true,
    underscored: true,
    // paranoid: true, // true로 설정하면 deletedAt 컬럼 생성
    charset: "utf8",
    collate: "utf8_general_ci",
    sequelize,
  }
);

ComponentTags.belongsTo(Component)
Component.hasMany(ComponentTags)

