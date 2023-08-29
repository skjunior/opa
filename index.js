/ this is a js file
//sergio krug junior

// resposta 1
const bool1 = true
const bool2 = false
const bool3 = !bool2
let resultado = bool1 && bool2
console.log("a. ", resultado)
resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)
resultado = !resultado && (bool1 || bool2)
console.log("c. ", resultado)
console.log("d. ", typeof resultado)

//O && retorna true somente se todos as boleans forem true,
//caso contrario retoprna false, e como podemos ver acima somente um era true.

//resposta 2

// primeiro vc cria as variaveis vazias, para serem preenchidas pelo usuario,
// e dps vc utiliza os comandos prompt. segue ex. abaixo
// e vc deve converter de string para number. Caso contrario vai fiacr um numero ao lado do outro.

// resposta 3
let primeiroNumero;
let segundoNumero;

primeiroNumero = prompt("Digite um numero");
segundoNumero = prompt("DIgite outro numero");
const soma = Number (primeiroNumero + segundoNumero);
console.log(soma);

//resposta B
// 1

let idadeUsuario;
let idadeAmigo;

idadeUsuario = prompt("Qual a sua idade?");
idadeAmigo = prompt("Qual a idade do seu(a) amigo(a)?");
console.log("Sua idade é maior que a do seu(a) amigo(a)?", (idadeUsuario)>= idadeAmigo);
console.log("a diferença de idades entre vocês é de:", idadeUsuario - idadeAmigo, "anos");

//resposta 2

let numero;
let dividido = 2
numero = prompt("Digite um numero par.");
let rEsultado = numero / dividido
console.log(rEsultado);
// quando é dividido por numero par, o valor fica inteiro
// e quando é dividido por um numero impar da um valor "quebrado".

// resposta 3

let suaIdade;
suaIdade = prompt("Quantos anos você tem?");
console.log("Você tem meses é", suaIdade * 12);
console.log("Você viveu", suaIdade * 365, "dias.");
console.log("Você viveu", 24 * 30 * 12 * suaIdade,"hoaras.");

//resposta 4

let número1;
let número2;
número1 = prompt("DIgite um número.");
número2 = prompt("Agora outro valor.");
console.log("O primeiro numero é maior que o segundo?",número1 > número2);
console.log("O primeiro numero é igual ao segundo?",número1 === número2); 
console.log("O primeiro numero é divisível pelo segundo?", número1 / número2);
console.log("O segundo numero é divisível pelo primeiro?", número2 / número1);
