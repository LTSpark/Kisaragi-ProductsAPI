const CommentaryService = require("../../../services/commentaries.service");
const { errorResponse, customResponse } = require("../../../utils/responses");

const DeleteCommentaryFlow = async(req, res) => {
    try{
        await CommentaryService.deleteCommentary(req.params.id);
        return customResponse(res, "Delete commentary success!");
    }
    catch(error){
        console.error(error);
        return errorResponse(res, "Delete commentary failed", error.message);
    }
}

module.exports = DeleteCommentaryFlow;