const ProductService = require("../services/products.service");
const { customErrorResponse } = require("../utils/responses");

const productExists = async id => {
    const product = await ProductService.getProduct(id);
    if(!product){
        throw new Error(`Product with ${id} does not exist`);
    }
}

const productAuthor = async( req, res, next ) => {
    const product = await ProductService.getProduct(req.params.id);
    if(req.userId != product.ownerId){
        return customErrorResponse(res, "Product does not belong to user", 403);
    }
    next();
}

module.exports = {
    productExists,
    productAuthor
}