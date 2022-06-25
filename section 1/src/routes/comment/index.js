import express from 'express';
import comment from './comment';

const router = express.Router();

router.use(comment);

export default router;
