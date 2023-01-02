import { conta } from "./Conta.js";

export class contaSalario extends conta{
    constructor(cliente){
        super(100,cliente,1001)
    }

    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor,taxa);
    }
}