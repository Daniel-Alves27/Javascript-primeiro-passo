export class sistemaDeAutenticacao {
    static login(funcionario,senha){
        return funcionario.senha == senha
    }
}