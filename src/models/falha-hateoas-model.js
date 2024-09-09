export function falhaHateoas(codigoInterno, mensagemDaFalha, detalhamentoDaFalha, hateoas) {
    this.codigoDaFalha = codigoInterno;
    this.timestamp = new Date().getTime();
    this.mensagem = mensagemDaFalha;
    this.detalhamento = detalhamentoDaFalha;
    this.links = hateoas;
    this.toStringJson = function() {
        return `{"codigo": "${this.codigoDaFalha}", "timestamp": "${this.timestamp}", "mensagem": "${this.mensagem}", "detalhamento": "${this.detalhamento}", "links": [${this.links}]}`;
    };
}