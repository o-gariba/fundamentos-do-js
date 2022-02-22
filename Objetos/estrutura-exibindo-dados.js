const meusDados = {
    nome : "Pedro",
    idade : 24,
    corDoCabelo : "castanho",
    profissao : "estudante",
    cpf: "92873127836"
}

console.log(meusDados);

console.log(`Os três primeiros números do seu CPF são: ${meusDados.cpf.substring(0,3)}`);

// Posso usar colchetes para buscar valores dentro de um objeto, como se um fosse um array de informações. Por exemplo, meusDados["nome"], caso passe um nome errado o resultado vai ser undefined.

// No JavaScript, objetos são classificados também como um array associativo (map ou dicionário), assim podemos fazer buscas com colchetes passando como argumento a string de uma chave do objeto.