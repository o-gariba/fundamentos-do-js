const alunos = [
    {
    nome:'jlçsadfkjf',
    idade: 23,
    pais: [{
        pai: 'pai1',
        mae: 'mae1'
        }]
    },
    {
    nome:'kljhsdalfk',
    idade:32,
    pais: [{
        pai:'pai2',
        mae: 'mae2'
    }]
    }
]

// console.log(alunos);

const listaDePaisSpread = [...alunos[0].pais,...alunos[1].pais];
const listaDePais= [alunos[0].pais,alunos[1].pais];

// console.log(listaDePais);
// console.log(listaDePaisSpread);

// console.log(listaDePais[0]);
// console.log(listaDePaisSpread[0]);

// Os ... são chamados SPREAD OPERATORS. Ainda não entendi como funcionam mto bem. Vamos ver mais exemplos.

const fichaGuerreiro = {
 nome: "Aragorn",
 classe: "guerreiro"
}

const equipoGuerreiro = {
 espada: "Andúril",
 capa: "capa élfica +2"
}

const guerreiro = { fichaGuerreiro, equipoGuerreiro }
console.log(guerreiro)

const guerreiroEspalhamento = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiroEspalhamento)

// O espalhamento "derrama" em um único objeto chaves e valores de objetos distintos, desde que não possuam mesma chave/propriedades com o mesmo nome (que nesse caso são smp reescritos)