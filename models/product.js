'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      this.hasOne(models.ProductInformations, {
          as: "productInformation",
          foreignKey: "product_id"
      });
      this.hasMany(models.Commentaries, {
          as: "commentary",
          foreignKey: "product_id"
      });
    }
  };
  Product.init({
    name: DataTypes.STRING,
    ownerId: DataTypes.STRING,
    price: DataTypes.FLOAT,
    quantity: DataTypes.INTEGER,
    available: DataTypes.BOOLEAN,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Product;
};