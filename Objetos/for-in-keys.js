const geladeira = {
    marca: 'Brastemp',
    volume: 50,
    numDePortas: 3,
    itensGuardados: 40,

    addQuantosItens: function(quantidade) {
        if (quantidade<=0) console.error("Adicione uma quantidade positiva!");
        else {
            this.quantidadeDeItensDentro += quantidade;
        }
    }
}

let relatorio = '';

for (let info in geladeira) {
    if (typeof geladeira[info] === 'function') continue;
    else relatorio += `${geladeira[info]} `
}

console.log(relatorio);

// O FOR...IN está percorrendo todo o objeto e guardando todas as chaves do objeto, não seus valores.

// Template strings aceitam quebra de linha na sua estrutura.

const chavesObjeto = Object.keys(geladeira);

console.log(chavesObjeto);

// Object.keys devolve um array com todas as chaves do objeto. ah vá.

function estaQuaseCheia(obj) {
    if (chavesObjeto.includes('itensGuardados') && obj.itensGuardados > 30) console.log(`A geledeira ${obj.marca} está quase cheia, ela possui ${obj.itensGuardados} itens.`)
}

estaQuaseCheia(geladeira);

// Usamos o include para ver se possui certa chave dentro do objeto e uma verificação extra para ver se printa ou nao.

// Object.entries(obj) mostra um array com arrays de chaves e valores.