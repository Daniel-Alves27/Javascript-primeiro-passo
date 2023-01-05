import { conta } from "../conta/Conta.js";

export class contaPoupanca extends conta{
    constructor(saldoinicial,cliente,agencia){
        super(saldoinicial,cliente,agencia);
    }
}