const db = require("../models");
const Product = db.Products;
const ProductInformation = db.ProductInformations;
const Commentary = db.Commentaries;

class CommentaryService {
    async createCommentary(commentaryData){
        await Commentary.create(commentaryData);
    }
    async deleteCommentary(id){
        await Commentary.destroy({
            where: {
                id
            }
        });
    }
    getCommentary(id){
        return Commentary.findByPk(id);
    }
}

const commentaryService = new CommentaryService();

module.exports = commentaryService;