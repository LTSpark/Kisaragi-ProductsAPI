const { param } = require("express-validator");

const { authToken } = require("../../../middlewares/authToken");
const { commentaryAuthor } = require("../../../middlewares/databaseValidators");
const { fieldValidation } = require("../../../middlewares/fieldValidation");

const DeleteCommentaryValidators = [
    authToken,
    param("id").isInt(),
    fieldValidation,
    commentaryAuthor
];

module.exports = DeleteCommentaryValidators;