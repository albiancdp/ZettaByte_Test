import { validationResult } from 'express-validator';
import responseHelper from '../../helpers/utils/response';
import indexDomain from '../../domains/index';
import validateHelper from '../../helpers/utils/validator_rebuild';

const listArticel = async (req, res) => {
  try {
    const notValids = validationResult(req);
    if (!notValids.isEmpty()) {
      const valid = validateHelper(notValids);
      return responseHelper.errorValidate(res, valid);
    };
    const resArticel = await indexDomain.articelDomain.listArticel(req);
    return responseHelper.success(res, 'Get List Articel', resArticel);
  }
  catch (err) {
    return responseHelper.errorService(res, err.message);
  };
};

export default listArticel;
