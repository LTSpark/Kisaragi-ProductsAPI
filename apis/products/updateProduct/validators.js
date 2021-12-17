const { body, param } = require("express-validator");

const { authToken } = require("../../../middlewares/authToken");
const { productAuthor } = require("../../../middlewares/databaseValidators");
const { fieldValidation } = require("../../../middlewares/fieldValidation");

const UpdateProductValidators = [
    authToken,
    param("id").isInt(),
    param("id").custom(productExists),
    body("name").optional().notEmpty().trim(),
    body("price").optional().isFloat({ min: 0.1 }),
    body("quantity").optional().isInt({ min: 0 }),
    body("available").optional().isBoolean(),
    body("brand").optional().notEmpty().trim(),
    body("series").optional().notEmpty().trim(),
    body("country").optional().notEmpty().trim(),
    body("description").optional().notEmpty().trim(),
    fieldValidation,
    productAuthor
];

module.exports = UpdateProductValidators;