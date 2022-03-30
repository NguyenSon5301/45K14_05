"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {}
  }
  Blog.init(
    {
      title: DataTypes.STRING,
      contentHTML: DataTypes.TEXT,
      contentMarkDown: DataTypes.TEXT,
      description: DataTypes.TEXT,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
