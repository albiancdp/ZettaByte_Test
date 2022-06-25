import express from 'express';
// import router
import defaultRouter from './default/index';
import articelRouter from './articel/index';
import healthCheckRouter from './server-health-check/index';

const router = express.Router();

router.use(defaultRouter);
router.use(articelRouter);
router.use(healthCheckRouter);

export default router;
