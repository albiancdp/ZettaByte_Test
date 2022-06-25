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
    if (!resComment) return responseHelper.errorValidate(res, { articelId: 'Please Input articelId' });
    return responseHelper.success(res, 'Get List Comment', resComment);
  }
  catch (err) {
    return responseHelper.errorService(res, err.message);
  };
};

export default listComment;
