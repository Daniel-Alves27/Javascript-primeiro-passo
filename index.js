//orientação a objetos
import { Clientes } from "./Clientes.js";
import { contaCorrente } from "./ContaCorrente.js";

//________________________________
const cliente1 = new Clientes("Daniel",11122233309);

const contaCorrenteDaniel = new contaCorrente(1001,cliente1);

console.log(cliente1)
//__________________________________

//__________________________________
const cliente2 = new Clientes("William",88822233309);

const contaCorrenteWilliam = new contaCorrente(1001,cliente2);

console.log(contaCorrenteWilliam);

//____________________________________
const contas = {
    "Daniel": contaCorrenteDaniel,
    "William": contaCorrenteWilliam
}

console.log(contaCorrente.numeroDeContas);

//console.log(contas["William"])
//____________________________________

//console.log(contaCorrenteDaniel.depositar(500))
//console.log(contaCorrenteDaniel.transferir(200,contas["William"]))
//console.log(contaCorrenteDaniel._saldo);