"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Allcode extends Model {
    static associate(models) {
      Allcode.hasMany(models.User, {
        foreignKey: "gender",
        as: "genderData",
      });
      Allcode.hasMany(models.User, {
        foreignKey: "roleId",
        as: "roleData",
      });
      Allcode.hasMany(models.Product, {
        foreignKey: "priceId",
        as: "priceData",
      });
      Allcode.hasMany(models.Product, {
        foreignKey: "typeId",
        as: "typeData",
      });
    }
  }
  Allcode.init(
    {
      keyMap: DataTypes.STRING,
      type: DataTypes.STRING,
      valueEn: DataTypes.STRING,
      valueVi: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Allcode",
    }
  );
  return Allcode;
};
