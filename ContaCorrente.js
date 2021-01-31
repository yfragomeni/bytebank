import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;
    // #saldo -> atributo privado
    _saldo = 0;

    set cliente(novoValor) {
        if(novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }


    get saldo() {
        return this._saldo;
    }

    constructor(cliente, agencia) {
        this.agencia = agencia;
        // usando acessor de dentro da classe
        this.cliente = cliente;
        this._saldo = 0;
        // Atributo estático da Conta Corrente, como um todo.
        ContaCorrente.numeroDeContas +=1;
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