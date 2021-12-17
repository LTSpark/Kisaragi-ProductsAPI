const { Router } = require("express");

const PostProductFlow = require("../apis/products/postProduct/flow");
const PostProductValidators = require("../apis/products/postProduct/validators");

const router = Router();

router.post("/", PostProductValidators, PostProductFlow);

module.exports = router;
