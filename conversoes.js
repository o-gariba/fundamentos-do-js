// Conversao implicita

const num = 3453;
const num2 = 3453;
const numString = "3453";

console.log(num == numString); //Aqui o primeiro num foi convertido para string, pois o js sabe que numString é string
console.log(num === numString); //Aqui a comparação é completa, sem conversoes implicitas previas (chamado de comparaçao explícita)

// conversão explícita

console.log(num + Number(numString));