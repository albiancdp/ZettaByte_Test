import express from 'express';
// import controller
import indexController from '../../controllers/index';
import indexValidator from '../../validators/index';
// import config
import configs from '../../configs/global_config';

const router = express.Router();

router.route(configs.routeBase + '/comment/create')
  .post(indexValidator.comment_create_validator(), indexController.commentController.createComment);

router.route(configs.routeBase + '/comment/list')
  .get(indexValidator.list_validator(), indexController.commentController.listComment);

router.route(configs.routeBase + '/comment/')
  .put(indexValidator.comment_update_validator(), indexController.commentController.updateComment);

router.route(configs.routeBase + '/comment/:id')
  .delete(indexValidator.id_validator(), indexController.commentController.deleteComment);

router.route(configs.routeBase + '/comment/:id')
  .get(indexValidator.id_validator(), indexController.commentController.readComment);


export default router;
