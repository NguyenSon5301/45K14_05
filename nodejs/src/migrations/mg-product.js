"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      namePR: {
        type: Sequelize.STRING,
      },
      sizeId: {
        type: Sequelize.STRING,
      },
      typeId: {
        type: Sequelize.STRING,
      },
      priceId: {
        type: Sequelize.STRING,
      },
      image: {
        allowNull: false,
        type: Sequelize.BLOB("long"),
      },
      description: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("products");
  },
};
