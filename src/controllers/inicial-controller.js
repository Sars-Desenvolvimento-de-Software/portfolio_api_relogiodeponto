import { retornaLinksHateoasInicial,
        retornaLinksHateoasDocs } from '../functions/inicial-function.js';
import resposta from '../models/respostas-estruturadas-model.js';

const RetornarApresentacao = (req, res) => {
    let linksHateaos = retornaLinksHateoasInicial();
    let apresentacao = new resposta.sucesso(
        "Bem-vindo a Web API Portfólio Relógio de Ponto. " +
        "Esse web service tem por objetivo ser um exemplo de Web API construída com NodeJs e ExpressJs " +
        "no portfólio da empresa SarsDev, e foi baseado nas regras de negócio de um controle de apontamento de horas. " +
        "A elaboração desse projeto seguiu a arquitetura REST e adotou o padrão de comunicação HATEOAS. " +
        "Para mais informações consulte o repositório github ou navegue pela Web API iniciando no endpoint DOCS.",
        linksHateaos.toString()
    ).toStringJson();
    res.send(JSON.parse(apresentacao));
}

const RetornarEndpoints = (req, res) => {
    let linksHateaos = retornaLinksHateoasDocs();
    let documentacao = new resposta.sucesso(
        "Documentação: Web API Portfólio Relógio de Ponto",
        linksHateaos.toString()
    ).toStringJson();
    res.send(JSON.parse(documentacao));
}

export const controller = {
    RetornarApresentacao,
    RetornarEndpoints
}