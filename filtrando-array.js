const nomes = ['Ana', 'Beatriz', 'Caio', 'Danilo'];

const notas = [7, 4.5, 8, 7.5];

// Pq precisamos do aluno como um dos parametros?
// O retorno do método filter é o primeiro parametro, no caso o nome do aluno.
// Posso usar underline parametro para que o vscode não reclame que o parametro nao está sendo usado
const reprovados = nomes.filter( (_aluno, indice) => notas[indice] < 5);

console.log('reprovado(s): ', reprovados);

// Filter trabalha com verdadeiro ou falso, sempre.