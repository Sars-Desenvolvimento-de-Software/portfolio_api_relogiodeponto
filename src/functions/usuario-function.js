import { hateoas } from '../models/hateoas-model.js';

export function listarValoresDoMapaComoArray(listaDeUsuarios) {
    return Array.from(listaDeUsuarios.values());
}

export function criarNovoUsuario(listaDeUsuarios, novoUsuario) {
    if(listaDeUsuarios.get(novoUsuario.codigo) !== undefined) {
        throw {codigoHTTP: 400, mensagem: "O usuário informado já existe!"};
    }
    listaDeUsuarios.set(novoUsuario.codigo, novoUsuario);
}

export function atualizaUsuario(listaDeUsuarios, usuarioAlterado) {
    if(listaDeUsuarios.get(usuarioAlterado.codigo) === undefined) {
        throw {codigoHTTP: 404, mensagem: "O usuário informado não existe!"};
    }
    listaDeUsuarios.set(usuarioAlterado.codigo, usuarioAlterado);
}

export function excluirUsuario(listaDeUsuarios, codigoDoUsuario) {
    if(!listaDeUsuarios.delete(codigoDoUsuario)) {
        throw {codigoHTTP: 404, mensagem: "O usuário informado não existe!"};
    }
}

export function retornaLinksHateoas(verboHTTP, codigo) {
    let links = [];
    if(verboHTTP === "DELETE") {
        links.push(new hateoas("GET", "Consulta todos os usuários", "/api/usuario").toStringJson());
        links.push(new hateoas("POST", "Adiciona um novo usuário", "/api/usuario").toStringJson());
        links.push(new hateoas("DELETE", "Self", `/api/usuario/${codigo}`).toStringJson());
    } else {
        links.push(new hateoas("GET", "Consulta todos os usuários", `/api/usuario`).toStringJson());
        links.push(new hateoas("GET", verboHTTP === "GET" ? "Self" : "Consulta um usuário", `/api/usuario/${codigo}`).toStringJson());
        links.push(new hateoas("POST", verboHTTP === "POST" ? "Self" : "Adiciona um novo usuário", "/api/usuario").toStringJson());
        links.push(new hateoas("PUT", verboHTTP === "PUT" ? "Self" : "Atualiza os dados do usuário", "/api/usuario").toStringJson());
        links.push(new hateoas("DELETE", "Remove o usuário", `/api/usuario/${codigo}`).toStringJson());
    }
    return links;
}