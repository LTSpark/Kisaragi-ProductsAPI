const { param } = require("express-validator");

const { productExists } = require("../../../middlewares/databaseValidators");
const { fieldValidation } = require("../../../middlewares/fieldValidation");

const GetProductValidators = [
    param("id").isInt(),
    param("id").custom(productExists),
    fieldValidation
];

module.exports = GetProductValidators;
