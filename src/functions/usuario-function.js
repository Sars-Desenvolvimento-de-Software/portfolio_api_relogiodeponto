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