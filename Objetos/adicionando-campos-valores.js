const meusDados = {
    nome : "Pedro",
    idade : 24,
    corDoCabelo : "castanho",
    profissao : "estudante",
    cpf: "92873127836"
}

// Posso add um campo novo declarando ele pela primeira vez. Posso alterar informações apenas declarando novamente alguma informação

meusDados.celular = "Xiaomi";

console.log(meusDados);

meusDados.celular = ["Samsumg", "Xiaomi"];

console.log(meusDados);

// Podemos ter como valores de alguma chave um array de valores, sem problemas.