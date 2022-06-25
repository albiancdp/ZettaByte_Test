import express from 'express';
import articel from './articel';

const router = express.Router();

router.use(articel);

export default router;
