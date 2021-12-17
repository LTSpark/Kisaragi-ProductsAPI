const ProductService = require("../../../services/products.service");
const { cloudinaryImageUpload } = require("../../../utils/cloudinaryImageUpload");
const { errorResponse, customResponse } = require("../../../utils/responses");

const ProductServiceFlow = async(req, res) => {
    const { brand, series, country, description, ...product } = req.body;
    const { name, price, quantity, available, ...productInformation} = req.body;
    product.ownerId = req.userId;
    product.image = await cloudinaryImageUpload(req.files.file, "Kisaragi-Products");
    try {
        await ProductService.createProduct(product, productInformation);
        return customResponse(res, "Product created successfully", 201);
    }
    catch(error){
        console.error(error);
        return errorResponse(res, "Product creation failed", error.message);
    }
}

module.exports = ProductServiceFlow;
