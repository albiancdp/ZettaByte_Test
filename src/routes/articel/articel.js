import express from 'express';
// import controller
import indexController from '../../controllers/index';
import indexValidator from '../../validators/index';
// import config
import configs from '../../configs/global_config';

const router = express.Router();

router.route(configs.routeBase + '/articel/create')
  .post(indexValidator.articel_create_validator(), indexController.articelController.createArticel);

router.route(configs.routeBase + '/articel/list')
  .get(indexValidator.list_validator(), indexController.articelController.listArticel);

router.route(configs.routeBase + '/articel/')
  .put(indexValidator.articel_update_validator(), indexController.articelController.updateArticel);

router.route(configs.routeBase + '/articel/:id')
  .delete(indexValidator.id_validator(), indexController.articelController.deleteArticel);

router.route(configs.routeBase + '/articel/:id')
  .get(indexValidator.id_validator(), indexController.articelController.readArticel);

export default router;
