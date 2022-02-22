const geladeira = {
    marca: 'Eletrolux',
    quantidadeDeItensDentro: 30,

    // Dentro de um objeto, a função é declarada em outra ordem. Primeiro dizemos o nome dela, como uma chave do objeto, e no seu valor dizemos que é uma função e declaremos seu funcionamento.
    addQuantosItens: function(quantidade) {
        if (quantidade<=0) console.error("Adicione uma quantidade positiva!");
        else {
            this.quantidadeDeItensDentro += quantidade;
        }
    }
}

console.log(geladeira.quantidadeDeItensDentro)

geladeira.addQuantosItens(5)

console.log(geladeira.quantidadeDeItensDentro)

geladeira.addQuantosItens(-24)

console.log(geladeira.quantidadeDeItensDentro)

// IMPORTANTE! O js quando trabalha com objetos acessa valores ATRAVÉS DE REFERENCIA, NÃO CÓPIA. Ou seja, criando uma nova referencia e referenciando um objeto já criado, eu apenas crio mais uma referencia ao mesmo objeto, não um objeto novo.

// Para copiarmos um objeto podemos usar a função Object.create(), passando como protótipo um objeto já existente, que é o insumo do método create.