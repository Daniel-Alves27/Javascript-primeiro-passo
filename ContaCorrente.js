export class contaCorrente {
    agencia;
    _saldo = 0;

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
};
