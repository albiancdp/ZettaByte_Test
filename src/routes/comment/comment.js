import express from 'express';
// import controller
import indexController from '../../controllers/index';
import indexValidator from '../../validators/index';
// import config
import configs from '../../configs/global_config';

const router = express.Router();

router.route(configs.routeBase + '/comment/create')
  .post(indexValidator.list_validator(), indexController.articelController.createArticel);

router.route(configs.routeBase + '/comment/list')
  .get(indexValidator.list_validator(), indexController.articelController.listArticel);

router.route(configs.routeBase + '/comment/read')
  .get(indexValidator.list_validator(), indexController.articelController.readArticel);

router.route(configs.routeBase + '/comment/')
  .put(indexValidator.list_validator(), indexController.articelController.updateArticel)
  .delete(indexValidator.list_validator(), indexController.articelController.deleteArticel);

export default router;
