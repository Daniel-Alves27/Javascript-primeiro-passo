export class sistemaDeAutenticacao {
    static login(autenticavel,senha){
        if(sistemaDeAutenticacao.ehautenticavel(autenticavel)){
            return autenticavel.autenticar(senha)
        }
        return false
    }

    static ehautenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }
}