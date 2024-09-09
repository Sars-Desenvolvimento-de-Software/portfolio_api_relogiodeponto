import { listarValoresDoMapaComoArray,
        criarNovoUsuario,
        atualizaUsuario,
        excluirUsuario,
        retornaLinksHateoas } from '../functions/usuario-function.js';
import resposta from '../models/respostas-estruturadas-model.js';

var mapaDeUsuarios = new Map();

const RetornarTodosUsuarios = (req, res) => {
    let listaDeUsuarios = listarValoresDoMapaComoArray(mapaDeUsuarios);
    let retorno = listaDeUsuarios.map((valor, indice, array) => {
        let linksHateaos = retornaLinksHateoas("GET", valor.codigo);
        return new resposta.sucesso(valor, linksHateaos).toStringJson();
    });
    res.status(200).send(JSON.parse(`[${retorno.toString()}]`));
}

const RetornarUsuarioPorCodigo = (req, res) => {
    let usuario = mapaDeUsuarios.get(req.params.codigo);
    if(usuario === undefined) {
        res.status(404).send("Falha ao consultar o usuário: O usuário não existe!");
    }
    let linksHateaos = retornaLinksHateoas("GET", req.params.codigo);
    let retorno = new resposta.sucesso(usuario, linksHateaos).toStringJson();
    res.status(200).send(JSON.parse(`[${retorno.toString()}]`));
}

const AdicionarUsuario = (req, res) => {
    try {
        criarNovoUsuario(mapaDeUsuarios, req.usuario);
        let linksHateaos = retornaLinksHateoas("POST", req.usuario.codigo);
        let retorno = new resposta.sucesso("Usuário criado com sucesso!", linksHateaos).toStringJson();
        res.status(201).send(JSON.parse(retorno));
    } catch (erro) {
        console.log(erro);
        res.status(erro.codigoHTTP).send("Falha ao adicionar o usuário: " + erro.mensagem);
    }
}

const AtualizarUsuario = (req, res) => {
    try {
        atualizaUsuario(mapaDeUsuarios, req.usuario);
        let linksHateaos = retornaLinksHateoas("PUT", req.usuario.codigo);
        let retorno = new resposta.sucesso("Usuário atualizado com sucesso!", linksHateaos).toStringJson();
        res.status(200).send(JSON.parse(retorno));
    } catch (erro) {
        res.status(erro.codigoHTTP).send("Falha ao atualizar o usuário: " + erro.mensagem);
    }
}

const RemoverUsuario = (req, res) => {
    try {
        excluirUsuario(mapaDeUsuarios, req.params.codigo);
        let linksHateaos = retornaLinksHateoas("DELETE", req.params.codigo);
        let retorno = new resposta.sucesso("Usuário removido com sucesso!", linksHateaos).toStringJson();
        res.status(200).send(JSON.parse(retorno));       
    } catch (erro) {
        res.status(erro.codigoHTTP).send("Falha ao remover o usuário: " + erro.mensagem);
    }
}

export const controller = {
    RetornarTodosUsuarios,
    RetornarUsuarioPorCodigo,
    AdicionarUsuario,
    AtualizarUsuario,
    RemoverUsuario
}