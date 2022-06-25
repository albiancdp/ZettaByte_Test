import { validationResult } from 'express-validator';
import responseHelper from '../../helpers/utils/response';
import indexDomain from '../../domains/index';
import validateHelper from '../../helpers/utils/validator_rebuild';

const listComment = async (req, res) => {
  try {
    const notValids = validationResult(req);
    if (!notValids.isEmpty()) {
      const valid = validateHelper(notValids);
      return responseHelper.errorValidate(res, valid);
    };
    const resComment = await indexDomain.commentDomain.listComment(req);
    return responseHelper.success(res, 'Get List Articel', resComment);
  }
  catch (err) {
    return responseHelper.errorService(res, err.message);
  };
};

export default listComment;
