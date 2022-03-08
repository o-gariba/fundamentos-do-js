// Quase tudo no JS é um objeto. Obj literal: chaves e valores declarados.

// No navegador, podemos acessar a propriedade .__proto__ que fornece todos métodos HERDADOS desse objeto. Por exemplo, ao declararmos um array e acessarmos o .__proto__ o navegador fornece uma lista de propriedades de Array().

// Vamos ver uma função construtora de um objeto.

function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor) {
        if (valor <= 0) return console.log('Depósito bloqueado, insira um valor positivo!')
        else this.saldo += valor;
    }
}

const pedro = new Cliente('Pedro', '9837126398127', 'pedrogaribaldisantos@gmail.com', 100000);

// console.log(pedro);

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup) {
    Cliente.call(this, nome, cpf, email, saldo)
    this.saldoPoup = saldoPoup
}

ClientePoupanca.prototype.depositarPoup = function(valor) {
    this.saldoPoup += valor;
}