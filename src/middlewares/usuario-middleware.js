import { usuario } from '../models/usuario-model.js';

export const usuarioParser = (req, res, next) => {
    const novoUsuario = new usuario(req.body);
    req.usuario = novoUsuario;
    next();
}