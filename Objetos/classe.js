class Cliente{

    constructor(nome, email, cpf, saldo){
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
        this.saldo = saldo;
    }

    depositar(valor){
        if (valor <= 0) return console.error('Valor negativo ou nulo');
        else saldo += valor;
    }

    exibeSaldo(){
        console.log(this.saldo);
    }

}

const pedro = new Cliente('pedro', '092138', 'posdafi@email.com', 1999);

pedro.exibeSaldo();

class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoup){
        super(nome, email, cpf, saldo);
        this.saldoPoup = saldoPoup;
    }

    depositarPoupanca(valor) {
        this.saldoPoup += valor;
    }
}

pedro.saldoPoup = 100;

console.log(pedro);

// pedro.depositarPoupanca(100);
// Dá erro ao tentarmos usar um método exclusivo de ClientePoupanca em um Cliente, apenas.

const pedroPoup = new ClientePoupanca('pedro', 'lkasjfdhasd', '42342143', 1000, 500);

pedroPoup.depositarPoupanca(100);

console.log(pedroPoup)