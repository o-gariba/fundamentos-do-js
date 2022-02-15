const notas = [10, 8, 3, 9, 4, 8, 3];

const media = notas.reduce((acumulado, indiceAtual) => indiceAtual + acumulado, 0) / notas.length;

console.log(media);

// Caso tenha mais de uma linha de instrução dentro de uma arrow function, as chaves {} e a palavra-chave return voltam a ser necessárias.

// Outra forma de enxergar como o reduce funciona:

function operacaoNumerica(acum, atual) {
 return atual + acum
}

const soma = numeros.reduce(operacaoNumerica, 0)