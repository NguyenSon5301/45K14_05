"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class NewLetter extends Model {
    static associate(models) {
      // define association here
    }
  }
  NewLetter.init(
    {
      emailNL: DataTypes.STRING,
      imageNL: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "NewLetter",
    }
  );
  return NewLetter;
};
