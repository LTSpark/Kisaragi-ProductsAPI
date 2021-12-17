const ProductService = require("../../../services/products.service");
const { errorResponse } = require("../../../utils/responses");

const GetProductFlow = async (req, res) => {
    try{
        const user = await ProductService.getProduct(req.params.id);
        return res.json({ user });
    }
    catch(error){
        console.error(error);
        return errorResponse(res, "Getting product failed", error.message);
    }
}

module.exports = GetProductFlow;
