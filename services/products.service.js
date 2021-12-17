const db = require("../models");
const Product = db.Product;
const ProductInformation = db.Product;

class ProductService {
    async createProduct(productData, productInformationData) {
        await Product.create(productData);
        await ProductInformation.create(productInformationData);
    }
}

const productService = new ProductService();
module.exports = productService;
