//orientação a objetos
import { Clientes } from "./Clientes.js";
import { contaSalario } from "./conta/contaSalario.js";
import { contaCorrente } from "./conta/ContaCorrente.js";
import { contaPoupanca } from "./conta/Contapoupanca.js";
import { Gerente } from "./funcionarios/Gerente.js";
import { Diretor } from "./funcionarios/Diretor.js";
import { sistemaDeAutenticacao } from "./SistemaDeAutenticacao.js";


const gerente = new Gerente("Miguel",5000,11122233300);
const diretor = new Diretor("Joao",10000,44455566601);
gerente.cadastrarSenha("12345")

const estaLogado = sistemaDeAutenticacao.login(gerente,"12345");
console.log(estaLogado)

//________________________________
//const cliente1 = new Clientes("Daniel",11122233309);
//
//const contaCorrenteDaniel = new contaCorrente(0,cliente1,1001);
//const contaSalarioDaniel = new contaSalario(100,cliente1,1001)
//const contaPoupancaDaniel = new contaPoupanca(58,"Daniel",1001);
//
//console.log(contaCorrenteDaniel);
//console.log(contaPoupancaDaniel);
//console.log(contaSalarioDaniel.sacar(12));
//console.log(contaSalarioDaniel.saldo)
//
//console.log(cliente1);
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