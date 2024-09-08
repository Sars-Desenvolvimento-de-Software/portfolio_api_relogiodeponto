import express from 'express';
import { controller } from '../controllers/usuario-controller.js';
import { usuarioParser } from '../middlewares/usuario-middleware.js';

const router = express.Router();

router.get('/', controller.RetornarTodosUsuarios);
router.post('/', usuarioParser, controller.AdicionarUsuario);
router.put('/', usuarioParser, controller.AtualizarUsuario);
router.delete('/:codigo', controller.RemoverUsuario);

export default router;