'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Commentary extends Model {
    static associate(models) {
      this.belongsTo(models.Products, {
          as: "product",
          foreignKey: "product_id"
      });
    }
  };
  Commentary.init({
    authorId: DataTypes.STRING,
    commentary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Commentaries',
  });
  return Commentary;
};