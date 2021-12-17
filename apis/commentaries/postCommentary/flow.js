const CommentaryService = require("../../../services/commentaries.service");
const { errorResponse, customResponse } = require("../../../utils/responses");

const PostCommentaryFlow = async(req, res) => {
    const commentary = {
        commentary: req.body.commentary,
        product_id: req.body.product_id,
        authorId: req.userId
    };
    try{
        await CommentaryService.createCommentary(commentary);
        return customResponse(res, "Create commentary done successfully!");
    }
    catch(error){
        console.error(error);
        return errorResponse(res, "Create commentary failed", error.message);
    }
}

module.exports = PostCommentaryFlow;
