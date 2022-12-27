//orientação a objetos
import { Clientes } from "./Clientes.js";
import { contaCorrente } from "./ContaCorrente.js";

//________________________________
const cliente1 = new Clientes();
cliente1.nome = "Daniel";
cliente1.cpf = 11122233309;

const contaCorrenteDaniel = new contaCorrente();
contaCorrenteDaniel.agencia = 1001;
contaCorrenteDaniel._saldo = 0;
contaCorrenteDaniel.Clientes = cliente1;
//__________________________________

//__________________________________
const cliente2 = new Clientes();
cliente2.nome = "William";
cliente2.cpf = 88822233309;

const contaCorrenteWilliam = new contaCorrente();
contaCorrenteWilliam.agencia = 1001;
contaCorrenteWilliam._saldo = 0;
contaCorrenteWilliam.Clientes = cliente2
//____________________________________

//____________________________________
const contas = {
    "Daniel": contaCorrenteDaniel,
    "William": contaCorrenteWilliam
}
//console.log(contas["William"])
//____________________________________

console.log(contaCorrenteDaniel.depositar(500))
console.log(contaCorrenteDaniel.transferir(200,contas["William"]))
console.log(contaCorrenteDaniel._saldo);