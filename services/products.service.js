const db = require("../models");
const Product = db.Products;
const ProductInformation = db.ProductInformations;

const { cloudinaryImageDelete } = require("../utils/cloudinaryImageDelete");

class ProductService {
  async createProduct(productData, productInformationData) {
    const product = await Product.create(productData);
    productInformationData.product_id = product.id;
    await ProductInformation.create(productInformationData);
  }

  getProducts(from, limit) {
    return Product.findAll({
      include: ["productInformation", "commentary"],
      limit: limit,
      offset: from,
    });
  }

  getProduct(id) {
    return Product.findOne({
      where: { id },
      include: ["commentary", "productInformation"],
    });
  }

  async deleteProduct(id) {
    const product = await Product.findByPk(id);
    cloudinaryImageDelete(product.image, "Kisaragi-Products");
    await product.destroy();
  }

  async updateProduct(id, productData, productInformationData) {
    await Product.update(productData, { where: { id } });
    await Product.update(productInformationData, { where: { product_id: id } });
  }
}

const productService = new ProductService();
module.exports = productService;
