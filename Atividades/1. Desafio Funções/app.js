//Atividade 1
let titulo = document.querySelector ('h1');
titulo.innerHTML = "Hora do Desafio";

//Atividade 2
function verificarClick() {
    console.log ("O Botão foi Pressionado");
}


//Atividade 3
function exibirAlerta() { 
    alert("Eu amo JS");
}

//Atividade 4
function cidadeDoBrasil() {
    cidadeDoBrasil = prompt('Me fale o nome de uma cidade no Brasil')
    alert (`Eu estive em ${cidadeDoBrasil} e lembrei de você <3`);
}

//Atividade 5
function somaDeNumeros() {
    let numeroA = parseInt(prompt("Digite um numero A"));
    let numeroB = parseInt(prompt("Digite um numero B"));

    alert(numeroA + numeroB);
}