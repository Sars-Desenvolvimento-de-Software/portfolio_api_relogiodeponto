import { listarValoresDoMapaComoArray,
        criarNovoUsuario,
        atualizaUsuario,
        excluirUsuario } from '../functions/usuario-function.js';

var mapaDeUsuarios = new Map();

const RetornarTodosUsuarios = (req, res) => {
    let listaDeUsuarios = listarValoresDoMapaComoArray(mapaDeUsuarios);
    res.send(listaDeUsuarios);
}

const AdicionarUsuario = (req, res) => {
    try {
        criarNovoUsuario(mapaDeUsuarios, req.usuario);
        res.send("Usuário criado com sucesso!");        
    } catch (erro) {
        res.status(erro.codigoHTTP).send("Falha ao adicionar o usuário: " + erro.mensagem);
    }
}

const AtualizarUsuario = (req, res) => {
    try {
        atualizaUsuario(mapaDeUsuarios, req.usuario);
        res.send("Usuário atualizado com sucesso!");        
    } catch (erro) {        
        res.status(erro.codigoHTTP).send("Falha ao atualizar o usuário: " + erro.mensagem);
    }
}

const RemoverUsuario = (req, res) => {
    try {
        excluirUsuario(mapaDeUsuarios, req.params.codigo);
        res.send("Usuário removido com sucesso!");        
    } catch (erro) {
        res.status(erro.codigoHTTP).send("Falha ao remover o usuário: " + erro.mensagem);
    }
}

export const controller = {
    RetornarTodosUsuarios,
    AdicionarUsuario,
    AtualizarUsuario,
    RemoverUsuario
}