import { validationResult } from 'express-validator';
import responseHelper from '../../helpers/utils/response';
import indexDomain from '../../domains/index';
import validateHelper from '../../helpers/utils/validator_rebuild';

const createComment = async (req, res) => {
  try {
    const notValids = validationResult(req);
    if (!notValids.isEmpty()) {
      const valid = validateHelper(notValids);
      return responseHelper.errorValidate(res, valid);
    };
    const resComment = await indexDomain.commentDomain.createComment(req.body);
    if(!resComment.status) return responseHelper.errorValidate(res, resComment.notValid);
    return responseHelper.success(res, 'Create Comment', resComment);
  }
  catch (err) {
    return responseHelper.errorService(res, err.message);
  };
};

export default createComment;
