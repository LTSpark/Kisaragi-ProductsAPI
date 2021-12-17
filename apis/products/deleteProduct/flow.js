const ProductService = require("../../../services/products.service");
const { errorResponse, customResponse } = require("../../../utils/responses");

const DeleteProductFlow = async(req, res) => {
    try{
        await ProductService.deleteProduct(req.params.id);
        return customResponse(res, "Delete product success!");
    }
    catch(error){
        console.error(error);
        return errorResponse(res, "Delete product failed", error.message);
    }
}

module.exports = DeleteProductFlow;