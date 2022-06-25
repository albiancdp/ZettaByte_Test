import { validationResult } from 'express-validator';
import responseHelper from '../../helpers/utils/response';
import indexDomain from '../../domains/index';
import validateHelper from '../../helpers/utils/validator_rebuild';

const readComment = async (req, res) => {
  try {
    const notValids = validationResult(req);
    if (!notValids.isEmpty()) {
      const valid = validateHelper(notValids);
      return responseHelper.errorValidate(res, valid);
    };
    const resComment = await indexDomain.commentDomain.readComment(req.params.id);
    if (!resComment) return responseHelper.notFound(res, 'Comment Not Found');
    return responseHelper.success(res, 'Detail Articel', resComment);
  }
  catch (err) {
    return responseHelper.errorService(res, err.message);
  };
};

export default readComment;
