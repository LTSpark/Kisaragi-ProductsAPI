const { Router } = require("express");

const DeleteCommentaryFlow = require("../apis/commentaries/deleteCommentary/flow");
const DeleteCommentaryValidators = require("../apis/commentaries/deleteCommentary/validators");

const PostCommentaryFlow = require("../apis/commentaries/postCommentary/flow");
const PostCommentaryValidators = require("../apis/commentaries/postCommentary/validators");

const router = Router();

router.post("/", PostCommentaryValidators, PostCommentaryFlow);

router.delete("/:id", DeleteCommentaryValidators, DeleteCommentaryFlow);

module.exports = router;
