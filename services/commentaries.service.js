const db = require("../models");
const Product = db.Products;
const ProductInformation = db.ProductInformations;
const Commentary = db.Commentaries;

class CommentaryService {
    async createCommentary(commentaryData){
        await Commentary.create(commentaryData);
    }
    async deleteCommentary(id, product_id, ownerId){
        await Commentary.destroy({
            where: {
                id,
                product_id,
                ownerId
            }
        })
    }
}

const commentaryService = new CommentaryService();

module.exports = commentaryService;