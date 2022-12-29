import { Clientes } from "./Clientes.js";

export class contaCorrente {
    static numeroDeContas = 0;
    agencia;
    _saldo = 0;
    _cliente;

    set cliente(novoValor){
        if (novoValor instanceof Clientes){
            this._cliente = novoValor;
        }
    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    sacar(valor){
        if (this._saldo >= valor){
            this._saldo -= valor
        }
        else{
            console.log("saldo insuficiente!")
        }
        return valor;
    }

    depositar(valor){
        if(this.valor <= 0){
        }
        this._saldo += valor
        return valor;
    }

    transferir(valor , contas){
        const valorSacado = this.sacar(valor);
        contas.depositar(valorSacado);
        return valor;
    }

    constructor(agencia,cliente) {
        this.agencia = agencia;
        this._cliente = cliente;
        contaCorrente.numeroDeContas++;
    }
};
