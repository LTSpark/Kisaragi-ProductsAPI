const { Router } = require("express");

const PostCommentaryFlow = require("../apis/commentaries/postCommentary/flow");
const PostCommentaryValidators = require("../apis/commentaries/postCommentary/validators");

const router = Router();

router.post("/", PostCommentaryValidators, PostCommentaryFlow);

module.exports = router;
