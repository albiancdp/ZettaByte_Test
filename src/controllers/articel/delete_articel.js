import { validationResult } from 'express-validator';
import responseHelper from '../../helpers/utils/response';
import indexDomain from '../../domains/index';
import validateHelper from '../../helpers/utils/validator_rebuild';

const deleteArticel = async (req, res) => {
  try {
    const notValids = validationResult(req);
    if (!notValids.isEmpty()) {
      const valid = validateHelper(notValids);
      return responseHelper.errorValidate(res, valid);
    };
    const resArticel = await indexDomain.articelDomain.deleteArticel(req.params.id);
    if (!resArticel) return responseHelper.notFound(res, 'Articel Not Found');
    return responseHelper.success(res, 'Delete Articel', resArticel);
  }
  catch (err) {
    return responseHelper.errorService(res, err.message);
  };
};

export default deleteArticel;
