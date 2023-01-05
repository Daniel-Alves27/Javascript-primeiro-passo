import { conta } from "../conta/Conta.js";

export class contaCorrente extends conta {
    static numeroDeContas = 0;

    constructor(cliente,agencia) {
        super(100,cliente,agencia)
        contaCorrente.numeroDeContas++;
    }

    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor,taxa);
    }
};
