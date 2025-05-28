//Atividade 1 "Calculadora IMC"
function Calculo_IMC(altura, peso) {
    return (peso/(altura**2));
}
let IMC = Calculo_IMC(
    Number(prompt("Altura em metros")),
    Number(prompt("Peso em Kg")),
);

function classificarIMC(IMC) {
  if (IMC > 40) return "Obesidade Grau 3";
  if (IMC > 35) return "Obesidade Grau 2";
  if (IMC > 30) return "Obesidade Grau 1";
  if (IMC > 25) return "Sobrepeso";
  if (IMC > 18.6) return "Peso Normal";
  return "Baixo Peso";
}

let classificação = classificarIMC(IMC);
console.log (IMC.toFixed(1), classificação);

//Atividade 2 "Calcular Fator de um número"
function Fatorização(A) {
    if (A == 0 || A == 1) {
    return 1;
  } else {
    return (A*Fatorização(A-1));
  }

}
let numero = Number(prompt("Digite um número para fatorar"));
let Fator = Fatorização(numero);
console.log (`O Fator de ${numero} é igual a ${Fator}`);

//Atividade 3 "Conversor de Moeda"
function Conversor_Real(dolar) {
    return (dolar*4.80);
}
let dolar = Number(prompt("Digite uma quantia em dolar"));
let plural = dolar>1? "dolares":"dolar";
let reais = Conversor_Real(dolar);
console.log (`${dolar} ${plural} é o equivalente á ${reais.toFixed(2)} em Reais`);

//Atividade 4 "Perimetro e área de retângulo"
function Calculo_Retangulo(Altura, Largura) {
    let Area = (Altura*Largura);
    let Perimetro = (2*(Altura+Largura));
    return [Area, Perimetro];
}
let Altura = Number(prompt("Digite a Altura em metros de um retângulo"));
let Largura = Number(prompt("Digite a Largura em metros de um retângulo"));
let [valor_area, valor_perimetro] = Calculo_Retangulo(Altura, Largura);
console.log (`A área total é de ${valor_area} M² e o perimetro é de ${valor_perimetro}`);

//Atividade 5 "Perimetro de uma área circular"
function Calculo_Circulo(Raio) {
    let Area = (3.14*(Raio**2));
    let Perimetro = (2*3.14*Raio);
    return [Area, Perimetro];
}
let Raio = Number(prompt("Digite o Raio de uma circunferencia"));
let [area_circulo, perimetro_circulo] = Calculo_Circulo(Raio);
console.log (`A área total é de ${area_circulo.toFixed(1)} M² enquanto o perimetro é de ${perimetro_circulo.toFixed(1)}`);


//Atividade 6 "Tabuada"
function Tabuada(numero) {
    let multiplo = 1
    let resultado;
    while (multiplo <= 10) {
        resultado = numero * multiplo;
        console.log (`${numero} X ${multiplo} = ${resultado}`);
        multiplo ++;
    }
}

let numeroT = Number(prompt("Digite um número para ver sua tabuada"));
Tabuada(numeroT);