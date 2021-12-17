const { body } = require("express-validator");

const { authToken } = require("../../../middlewares/authToken");
const { productExists } = require("../../../middlewares/databaseValidators");
const { fieldValidation } = require("../../../middlewares/fieldValidation");

const PostCommentaryValidators = [
    authToken,
    body("product_id").isInt(),
    body("product_id").custom(productExists),
    body("commentary").notEmpty().trim(),
    fieldValidation
];

module.exports = PostCommentaryValidators;
