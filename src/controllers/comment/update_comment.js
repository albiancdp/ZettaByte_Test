import { validationResult } from 'express-validator';
import responseHelper from '../../helpers/utils/response';
import indexDomain from '../../domains/index';
import validateHelper from '../../helpers/utils/validator_rebuild';

const updateComment = async (req, res) => {
  try {
    const notValids = validationResult(req);
    if (!notValids.isEmpty()) {
      const valid = validateHelper(notValids);
      return responseHelper.errorValidate(res, valid);
    };
    const commentId = req.body.id;
    delete req.body.id;
    const resComment = await indexDomain.commentDomain.updateComment(commentId, req.body);
    if (!resComment) return responseHelper.notFound(res, 'Comment Not Found');
    return responseHelper.success(res, 'Update Comment', {});
  }
  catch (err) {
    return responseHelper.errorService(res, err.message);
  };
};

export default updateComment;
