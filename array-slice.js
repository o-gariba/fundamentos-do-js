const nomes = ['Carolina', 'Pedro', 'Caio', 'Heitor'];

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

console.log(`Na sala 1 temos: ${sala1}. No total temos ${sala1.length} alunos aqui`);
console.log(`Na sala 2 temos: ${sala2}`);