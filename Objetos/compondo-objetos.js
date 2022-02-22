const meusDados = {
    nome : "Pedro",
    idade : 24,
    corDoCabelo : "castanho",
    profissao : "estudante",
    cpf: "92873127836"
}

// meusDados.cursosAtivos = {
//     nome: ["Fundamentos em javascript: Objetos", "Layouts responsivos"],
//     cargaHoraria: [20, 16]
// }

console.log(meusDados);

// Para alterarmos valores de objetos em objetos, faço o mesmo procedimento de antes, acessando as chaves atráves de pontos '.'

// Como podemos lidar com uma lista de objetos dentro de um objeto. Vamos usar um array, da seguinte maneira:

meusDados.cursosAtivos = [{
    nome: "Fundamentos em javascript",
    cargaHoraria: 20
}]

// IMPORTANTE, SABENDO QUE VOU TER UM ARRAY DE OBJETOS, USEI A NOTAÇÃO DE ARRAY [] PARA DAR A PRIMEIRA INSTRUÇÃO AO OBJETO MÃE

meusDados.cursosAtivos.push({
    nome: "Layout responsivo",
    cargaHoraria: 16
})

// Agora posso usar métodos próprias de array, como o push()

console.log(meusDados);

// Posso também usar o método filter dentro do array de objetos, por exemplo

const cursoMaisRapido = meusDados.cursosAtivos.filter(curso => curso.cargaHoraria === 16);

console.log(cursoMaisRapido);