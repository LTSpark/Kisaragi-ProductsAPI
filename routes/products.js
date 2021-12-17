const { Router } = require("express");

const DeleteProductFlow = require("../apis/products/deleteProduct/flow");
const DeleteProductValidators = require("../apis/products/deleteProduct/validators");

const GetProductFlow = require("../apis/products/getProduct/flow");
const GetProductValidators = require("../apis/products/getProduct/validators");

const GetProductsFlow = require("../apis/products/getProducts/flow");
const GetProductsValidators = require("../apis/products/getProducts/validators");

const PostProductFlow = require("../apis/products/postProduct/flow");
const PostProductValidators = require("../apis/products/postProduct/validators");

const UpdateProductFlow = require("../apis/products/updateProduct/flow");
const UpdateProductValidators = require("../apis/products/deleteProduct/validators");

const router = Router();

router.post("/", PostProductValidators, PostProductFlow);

router.get("/:id", GetProductValidators, GetProductFlow);
router.get("/", GetProductsValidators, GetProductsFlow);

router.put("/:id", UpdateProductValidators, UpdateProductFlow);
router.delete("/:id", DeleteProductValidators, DeleteProductFlow);

module.exports = router;
