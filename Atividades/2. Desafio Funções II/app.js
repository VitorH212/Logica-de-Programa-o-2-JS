//Atividade 1
function Olá() {
    console.log("Olá Mundo :D");
}
Olá();

//Atividade 2
function Saudações(nome) {
    console.log(`Olá ${nome}`);
}
Saudações("Vitor");

//Atividade 3
function Dobrar(número) {
    return número * 2
}
let Resultado = Dobrar(prompt(""));
console.log (Resultado);

//Atividade 4
function Média(valor1, valor2, valor3) {
    return (valor1 + valor2 + valor3)/3;
}
let Resultado2 = Média (
    parseFloat(prompt("valor1")),
    parseFloat(prompt("valor2")),
    parseFloat(prompt("valor3"))
);
console.log (Resultado2);

//Atividade 5
function Medidas (N1, N2) {
    return N1 > N2? N1 : N2;
}
let Número_Maior = Medidas (
    parseFloat(prompt("Número A")),
    parseFloat(prompt("Número B"))
);
console.log(Número_Maior)

//Atividade 5
function Número_Quadrado (Valor) {
    return Valor**2
}

let Número = Número_Quadrado (
    parseFloat(prompt("Número ao Quadrado"))
);
console.log(Número);