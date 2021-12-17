const db = require("../models");
const Product = db.Products;
const ProductInformation = db.ProductInformations;

class ProductService {
  async createProduct(productData, productInformationData) {
    const product = await Product.create(productData);
    productInformationData.product_id = product.id;
    await ProductInformation.create(productInformationData);
  }

  async getProducts(from, limit) {
    return Product.findAll({
      include: ["productInformation"],
      limit: limit,
      offset: from
    });
  }
}

const productService = new ProductService();
module.exports = productService;
