import {funcionario} from "./Funcionario.js"

export class Gerente extends funcionario {
    constructor(nome,salario,cpf){
        super(nome,salario,cpf)
        this.bonificaçao = 1.1
    }
}