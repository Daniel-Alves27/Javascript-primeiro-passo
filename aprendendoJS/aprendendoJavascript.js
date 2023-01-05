/*let nome = "Daniel";
let idade = 23;
let estaAprovado = true;
let sobrenome = undefined;
let cor = null;

let pessoa = {
    nome: "Daniel",
    idade: 23,
    estaAprovado:true,
    sobrenome: "alves"
};

//console.log("pessoa");

let anime = {
    nomeDoAnime: "Naruto",
    nota: 10,
    plataforma: "crunchyroll"
};

let nomeDoIrmão = ["Matheus",11,"William",25]

//console.log(nomeDoIrmão[1])
let corSite = "azul"
let corDaHome = "vermelho"
function restaCor(cor, tonalidade){
    corSite = cor + ' ' +tonalidade;
};

console.log(corSite);
restaCor("verde","claro")
console.log(corSite);
*/

/*let a = "verde";
let b = "azul";

function mudaCor(inverteCora, inverteCorb){
    a = inverteCora;
    b = inverteCorb;
}
console.log(a,b);
mudaCor("azul","verde");
console.log(a,b);
*/

/*let max = numeroAleatorio(1,1);

function numeroAleatorio(num1,num2) {
    if (num1 > num2)
        return num1;
    

    else return num2;
};

console.log(max)*/

/*const resultado = fizzBuzz(15);
console.log(resultado);

function fizzBuzz(entrada) {
    if ( typeof entrada !== "number")
    return "não é um número"

    if (entrada % 3 === 0 && entrada % 5 === 0)
    return "FizzBuzz"

    if (entrada % 3 === 0)
    return "Fizz"
    
    if (entrada % 5 === 0)
    return "Buzz"

    return entrada
}
*/



/*let medidor = verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    let limiteDeVelocidade = 70;
    const kmPorPontos = 5;
    const pontosMaximo = 12;

    if (velocidade <= limiteDeVelocidade) 
    return "velocidade correta"

    else { 
        const pontos = Math.floor(((velocidade - limiteDeVelocidade) / kmPorPontos)); 

        if (pontos >= pontosMaximo)
        console.log("Carteira suspensa")

        else
        console.log("pontos", pontos);
    }
}
*/

/*exibirTipo(6);

function exibirTipo(limite) {
    for (let i = 0; i <= limite;i++) {
        if (i % 2 === 0)
        console.log(i,"par")

        else
        console.log(i,"impar")
    }
}
*/

/*const anime = {
    anime : "Naruto",
    ano : 2002,
    autor : "Kishimoto",
    personagem : "zabuza momoshi"
}

const fichaTecnica = exibirPropriedade(anime);

function exibirPropriedade(obj) {
    for( prop in obj) 
        if(typeof obj[prop] === "string")
        console.log(prop,obj[prop]);
    
}
*/
