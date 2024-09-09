export function usuario(dados) {
    this.codigo = dados.codigo;
    this.nome = dados.nome;
    this.senha = dados.senha;
    this.toStringJson = function() {
        return `{"codigo": "${this.codigo}", "nome": "${this.nome}", "senha": "${this.senha}"}`;
    };
}