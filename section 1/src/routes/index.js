import express from 'express';
// import router
import defaultRouter from './default/index';
import articelRouter from './articel/index';
import commentRouter from './comment/index';
import healthCheckRouter from './server-health-check/index';

const router = express.Router();

router.use(defaultRouter);
router.use(articelRouter);
router.use(commentRouter);
router.use(healthCheckRouter);

export default router;
