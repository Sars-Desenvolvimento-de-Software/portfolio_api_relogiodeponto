export function navegacaoHateoas(dados, hateoas) {
    this.dados = dados;
    this.links = hateoas;
    this.toStringJson = function() {
        let campoDados = typeof this.dados == "string" ? `"${this.dados}"` : this.dados.toStringJson();
        return `{"dados": ${campoDados}, "links": [${this.links}]}`;
    };
}