"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    static associate(models) {}
  }
  ProductOrder.init(
    {
      statusId: DataTypes.STRING,
      countPr: DataTypes.INTEGER,
      SumPr: DataTypes.INTEGER,
      image: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "ProductOrder",
    }
  );
  return ProductOrder;
};
