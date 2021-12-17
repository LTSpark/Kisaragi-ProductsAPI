const db = require("../models");
const Product = db.Products;
const ProductInformation = db.ProductInformations;

class ProductService {
  async createProduct(productData, productInformationData) {
    await Product.create(productData);
    await ProductInformation.create(productInformationData);
  }
}

const productService = new ProductService();
module.exports = productService;
