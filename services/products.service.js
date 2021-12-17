const db = require("../models");
const Product = db.Products;
const ProductInformation = db.ProductInformations;

class ProductService {
  async createProduct(productData, productInformationData) {
    await Product.create(productData);
    await ProductInformation.create(productInformationData);
  }

  async getProducts() {
    return await Product.findAll({
      include: ["productInformation"],
    });
  }
}

const productService = new ProductService();
module.exports = productService;
