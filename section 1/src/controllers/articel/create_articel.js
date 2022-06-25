import { validationResult } from 'express-validator';
import responseHelper from '../../helpers/utils/response';
import indexDomain from '../../domains/index';
import validateHelper from '../../helpers/utils/validator_rebuild';

const createArticel = async (req, res) => {
  try {
    const notValids = validationResult(req);
    if (!notValids.isEmpty()) {
      const valid = validateHelper(notValids);
      return responseHelper.errorValidate(res, valid);
    };
    const resArticel = await indexDomain.articelDomain.createArticel(req.body);
    if(!resArticel.status) return responseHelper.errorValidate(res, resArticel.notValid);
    return responseHelper.success(res, 'Create Articel', resArticel.data);
  }
  catch (err) {
    return responseHelper.errorService(res, err.message);
  };
};

export default createArticel;
