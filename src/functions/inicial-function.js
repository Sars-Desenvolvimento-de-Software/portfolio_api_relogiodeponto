import { hateoas } from '../models/hateoas-model.js';

export function retornaLinksHateoasInicial() {
    let links = [];
    links.push(new hateoas("GET", "Self", "/api").toStringJson());
    links.push(new hateoas("GET", "Documentação dos endpoints", "/api/docs").toStringJson());
    links.push(new hateoas("EXTERNO", "Repositório no Github", "https://github.com/Sars-Desenvolvimento-de-Software/portfolio_api_relogiodeponto").toStringJson());
    return links;
}

export function retornaLinksHateoasDocs() {
    let links = [];
    links.push(new hateoas("GET", "Self", "/api/docs").toStringJson());
    links.push(new hateoas("GET", "Apresentação da Web API", "/api").toStringJson());
    links.push(new hateoas("GET", "Consultar todos os usuários", "/api/usuario").toStringJson());
    links.push(new hateoas("GET", "Consultar usuário por código", "/api/usuario/:codigo").toStringJson());
    links.push(new hateoas("POST", "Adicionar novo usuário", "/api/usuario").toStringJson());
    links.push(new hateoas("PUT", "Atualizar usuário", "/api/usuario").toStringJson());
    links.push(new hateoas("DELETE", "Remover usuário", "/api/usuario/:codigo").toStringJson());
    return links;
}