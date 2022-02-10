const nomes = ['Pedro', 'Carolina', 'Lucas', 'Juca'];

const idades = [24,26,24,40];

const nomesEIdades = [nomes, idades]

const procuraNomeEIdade = (nomeAlune) => {
    if (nomesEIdades[0].includes(nomeAlune)) {
        let indiceBuscado = nomesEIdades[0].indexOf(nomeAlune)
        return `${nomesEIdades[0][indiceBuscado]}, sua idade é de ${nomesEIdades[1][indiceBuscado]} anos.`
    } else return 'Pessoa não cadastrada! Tente novamente com outro nome.'
}

console.log(procuraNomeEIdade('dafdf'))