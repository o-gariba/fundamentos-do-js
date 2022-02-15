const notas = [10, 9, 8, 7, 6];

// Posso colocar o argumento da arrow function em parenteses ou não.
// No operador ternário, o ++ não pode vir dpois na nota, pois ele vai nos devolver ela como já está no array notas e DPOIS somar um. Para que a arrowfnc devolva a nota acrescida de um, devemos usar ++nota.
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota);

console.log(notasAtualizadas);

const nomes = ['ana Julia', 'PAULO gustavO', 'sofia JANAINA'];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);

// O map varre qlq array e pode aplicar qlq função q a gnt defina. Mto bomm

const meuNome = "Pedro Garibaldi Santos";

const meuNomeSemEspaco = meuNome.map(caracter => caracter.toUpperCase());

console.log(meuNomeSemEspaco);

// O método .map não pode ser aplicado em strings!!!!

// A DIFERENÇA ENTRE OS MÉTODOS map E forEach SÃO SEU RETORNOS! ENQUANTO O PRIMEIRO RETORNA UMA NOVA STRING, O SEGUNDO NÃO RETORNA NADA!