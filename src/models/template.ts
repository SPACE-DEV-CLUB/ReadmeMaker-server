import { DataTypes, Model, Association } from "sequelize";
import sequelize from "./index";

interface TemplateProps {
  // id: string;
}

export class Template extends Model<TemplateProps> {
  public readonly id!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
  public static associations: {};
}

Template.init(
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
    link: {
      type: DataTypes.STRING,
    },
    related_comp: {
      type: DataTypes.JSON,
      validate: {
        notEmpty: true,
      },
    },
    tags: {
      type: DataTypes.JSON,
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
    sequelize,
    timestamps: true,
    underscored: true,
    charset: "utf8",
    collate: "utf8_general_ci",
  }
);
