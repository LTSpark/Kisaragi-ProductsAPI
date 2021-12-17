const ProductService = require("../../../services/products.service");
const { errorResponse, customResponse } = require("../../../utils/responses");

const UpdateProductFlow = async ( req, res ) => {
    const { brand, series, country, description, ...product } = req.body;
    const { name, price, quantity, available, ...productInformation} = req.body;
    try{
        await ProductService.updateProduct(req.params.id, product, productInformation);
        return customResponse(res, "Update product success!");
    }
    catch(error){
        console.error(error);
        return errorResponse(res, "Update product failed", error.message);
    }
}

module.exports = UpdateProductFlow;
