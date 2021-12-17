'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductInformation extends Model {
    static associate(models) {
      this.belongsTo(models.Products, {
          as: "product",
          foreignKey: "product_id"
      });
    }
  };
  ProductInformation.init({
    brand: DataTypes.STRING,
    series: DataTypes.STRING,
    country: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ProductInformations',
  });
  return ProductInformation;
};