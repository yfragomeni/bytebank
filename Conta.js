export class Conta {
    constructor(saldoInicial, cliente, agencia) {
        //Boa pratica no javascript: iniciar propriedades dentro
        //  do construtor.
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;

            return valor;
        };
    };

    depositar(valor) {
        // early return, verifica o que não quer primeiro
        if (valor <= 0) return;
        
        this._saldo += valor;
    };

    transferir(valor, conta) {
        // atentar-se ao this. Pegou desta conta, e depositou em outra
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    };
}