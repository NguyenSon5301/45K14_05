"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Blog extends Model {
    static associate(models) {}
  }
  Blog.init(
    {
      contentHTML: DataTypes.TEXT,
      contentMarkDown: DataTypes.TEXT,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Blog",
    }
  );
  return Blog;
};
