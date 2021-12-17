const { Router } = require("express");

const PostProductFlow = require("../apis/products/postProduct/flow");
const PostProductValidators = require("../apis/products/postProduct/validators");
const productService = require("../services/products.service");

const router = Router();

router.post("/", PostProductValidators, PostProductFlow);

router.get("/", async (req, res) => {
  const products = await productService.getProducts();
  res.json(products);
});

module.exports = router;
