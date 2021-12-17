const { body } = require("express-validator");

const { authToken } = require("../../../middlewares/authToken");
const { fileValidator, imageExtensionMiddleware } = require("../../../middlewares/customValidators");
const { fieldValidation } = require("../../../middlewares/fieldValidation");

const PostProductValidators = [
    authToken,
    body("name").notEmpty().trim(),
    body("price").isFloat({ min: 0.1 }),
    body("quantity").isInt({ min: 0 }),
    body("available").optional().isBoolean(),
    body("brand").notEmpty().trim(),
    body("series").notEmpty().trim(),
    body("country").notEmpty().trim(),
    body("description").notEmpty().trim(),
    fieldValidation,
    fileValidator,
    imageExtensionMiddleware
];

module.exports = PostProductValidators;
