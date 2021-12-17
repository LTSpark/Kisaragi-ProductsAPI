const { param } = require("express-validator");

const { authToken } = require("../../../middlewares/authToken");
const { productExists, productAuthor } = require("../../../middlewares/databaseValidators");
const { fieldValidation } = require("../../../middlewares/fieldValidation");

const DeleteProductValidators = [
    authToken,
    param("id").isInt(),
    param("id").custom(productExists),
    fieldValidation,
    productAuthor
];

module.exports = DeleteProductValidators;