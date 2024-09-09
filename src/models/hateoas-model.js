export function hateoas(verboHttp, descricao, endpoint) {
    this.type = verboHttp;
    this.rel = descricao;
    this.href = endpoint;
    this.toStringJson = function() {
        return `{"type": "${this.type}", "rel": "${this.rel}", "href": "${this.href}"}`;
    };
}