import { DataTypes, Model, Association } from "sequelize";
import sequelize from "./index";
import { ComponentTags } from './componentTags';

interface ComponentProps {
  // id: string;
}

export class Component extends Model<ComponentProps> {
  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public static associations: {
    componentHasManyTags: Association<Component, ComponentTags>;
  };
}

Component.init(
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
    default_value: {
      type: DataTypes.STRING,
    },
    link: {
      type: DataTypes.STRING,
    },
    like: {
      type: DataTypes.INTEGER,
    },
    new: {
      type: DataTypes.INTEGER,
    },
    expired: {
      type: DataTypes.BOOLEAN,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    timestamps: true,
    underscored: true,
    paranoid: true, // true로 설정하면 deletedAt 컬럼 생성
    charset: "utf8",
    collate: "utf8_general_ci",
    sequelize,
  }
);

