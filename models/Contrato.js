class Contrato {
    construtor(tipo, idtime, idjogador, inicio, fim) {
        this.id = id;
        this.tipo = tipo;
        this.idtimetime = idtime
        this.idjogador = idjogador;
        this.inicio = inicio
        this.fim = fim
    }
    isAtivo() {
        return this.fim == undefined;
    }
}