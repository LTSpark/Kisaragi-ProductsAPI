const ProductService = require("../../../services/products.service");
const { errorResponse } = require("../../../utils/responses");

const GetProductsFlow = async(req, res) => {
    let { from = 0, limit = 5 } = req.query;

    from = Number(from);
    limit = Number(limit);

    try{
        const products = await ProductService.getProducts(from, limit);
        return res.json({ products });
    }
    catch(error){
        console.error(error);
        return errorResponse(res, "Getting products failed", error.message);
    }
}

module.exports = GetProductsFlow;
