// Arrow = =>

const arrowFunc = nome => `Olá, meu nome é ${nome}`;

console.log(arrowFunc("Pedro"));

const arrowFuncComVariasLinhas = (num1, num2) => {
    resultado = num1 - num2;
    if (resultado) return `${num1} é menor`   
    else if (!resultado) return `${num2} é menor`
    else return 'Os numeros são iguais'
}

console.log(arrowFuncComVariasLinhas(4,5));