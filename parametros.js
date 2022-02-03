function soma(num1, num2) {
    return num1 + num2;
}

console.log(soma(2342, 1451));

// Definindo parametros padrões para funções

function multiplicacao(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(multiplicacao(soma(5,1)));

// Devolvendo undefined

function comParametro(param) {
    console.log(param)
}
comParametro()