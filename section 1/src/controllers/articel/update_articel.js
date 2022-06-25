import { validationResult } from 'express-validator';
import responseHelper from '../../helpers/utils/response';
import indexDomain from '../../domains/index';
import validateHelper from '../../helpers/utils/validator_rebuild';

const updateArticel = async (req, res) => {
  try {
    const notValids = validationResult(req);
    if (!notValids.isEmpty()) {
      const valid = validateHelper(notValids);
      return responseHelper.errorValidate(res, valid);
    };
    const articelId = req.body.id;
    delete req.body.id;
    const resArticel = await indexDomain.articelDomain.updateArticel(articelId, req.body);
    if (!resArticel) return responseHelper.notFound(res, 'Articel Not Found');
    return responseHelper.success(res, 'Update Articel', {});
  }
  catch (err) {
    return responseHelper.errorService(res, err.message);
  };
};

export default updateArticel;
