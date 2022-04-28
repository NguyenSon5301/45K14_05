"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ProductOrder extends Model {
    static associate(models) {
      ProductOrder.belongsTo(models.User, {
        foreignKey: "userId",
        as: "userData",
      });
      // ProductOrder.hasMany(models.Product, {
      //   foreignKey: "productId",
      //   as: "productData",
      // });
    }
  }
  ProductOrder.init(
    {
      statusId: DataTypes.STRING,
      productId: DataTypes.STRING,
      userId: DataTypes.STRING,
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
