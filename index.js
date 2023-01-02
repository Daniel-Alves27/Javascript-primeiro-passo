//orientação a objetos
import { Clientes } from "./Clientes.js";
import { contaSalario } from "./contaSalario.js";
import { contaCorrente } from "./ContaCorrente.js";
import { contaPoupanca } from "./Contapoupanca.js";

//________________________________
const cliente1 = new Clientes("Daniel",11122233309);

const contaCorrenteDaniel = new contaCorrente(0,cliente1,1001);
const contaSalarioDaniel = new contaSalario(100,cliente1,1001)
const contaPoupancaDaniel = new contaPoupanca(58,"Daniel",1001);

//console.log(contaCorrenteDaniel);
//console.log(contaPoupancaDaniel);
console.log(contaSalarioDaniel.sacar(12));
console.log(contaSalarioDaniel.saldo)

console.log(cliente1);
//__________________________________



/*
const cliente2 = new Clientes("William",88822233309);

const contaCorrenteWilliam = new contaCorrente(cliente2,1001);

console.log(contaCorrenteWilliam);
//____________________________________
const contas = {
    "Daniel": contaCorrenteDaniel,
    "William": contaCorrenteWilliam
}

console.log(contaCorrente.numeroDeContas);

//console.log(contas["William"])
//____________________________________
*/