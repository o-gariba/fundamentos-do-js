const listaNumeros = [100, 200, 300, 400, 500];

var somaParcial = 0;

for (let i = 0; i < listaNumeros.length; i++) {
    somaParcial += listaNumeros[i];
    console.log(somaParcial);
    if (i === listaNumeros.length-1) console.log('A média do array é', somaParcial/listaNumeros.length);
}