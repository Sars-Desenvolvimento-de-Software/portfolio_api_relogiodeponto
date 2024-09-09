import express from 'express';
import { controller } from '../controllers/inicial-controller.js';

const router = express.Router();

router.get('/', controller.RetornarApresentacao);
router.get('/docs', controller.RetornarEndpoints);

export default router;