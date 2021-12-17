const { Router } = require("express");

const GetProductsFlow = require("../apis/products/getProducts/flow");
const GetProductsValidators = require("../apis/products/getProducts/validators");

const PostProductFlow = require("../apis/products/postProduct/flow");
const PostProductValidators = require("../apis/products/postProduct/validators");

const router = Router();

router.post("/", PostProductValidators, PostProductFlow);

router.get("/", GetProductsValidators, GetProductsFlow);

module.exports = router;
