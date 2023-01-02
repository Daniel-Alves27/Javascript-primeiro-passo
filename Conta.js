import { Clientes } from "./Clientes.js";

export class conta {
    constructor(saldoInicial,cliente,agencia){
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;
        if(this.constructor == conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta Diretamente, pois essa é uma classe abstrata");
        }
    }

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
        throw new Error("O método Sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;

        if (this._saldo >= valorSacado){
            this._saldo -= valorSacado
        }
        else{
            console.log("saldo insuficiente!")
        }
        return valorSacado;
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

}