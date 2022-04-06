"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Allcode, {
        foreignKey: "priceId",
        targetKey: "keyMap",
        as: "priceData",
      });
      Product.belongsTo(models.Allcode, {
        foreignKey: "typeId",
        targetKey: "keyMap",
        as: "typeData",
      });
    }
  }
  Product.init(
    {
      namePR: DataTypes.STRING,
      sizeId: DataTypes.STRING,
      typeId: DataTypes.STRING,
      priceId: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
