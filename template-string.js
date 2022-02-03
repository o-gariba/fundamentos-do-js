const nome = 'Pedro';
const sobreNome = 'Garibaldi';
const idade = 23;

console.log(nome + ' ' + sobreNome);

const apresentacao = `Olá, meu nome é ${nome} ${sobreNome}`; // Devo usar a ` (crase) ao invés de ' ou "

console.log(apresentacao);

// Operadore ternários funcionam dentro de templates

console.log(`Olá, sou o ${nome} e gostaria de beber uma ${idade>18 ? 'cerveja' : 'agua'}`);