const notas = [10, 6.5, 8, 7.5];

let somaParcial = 0;

//Callback, o parametro da função nao é um dado, aqui o parametro é outra função
notas.forEach( nota => {
    somaParcial += nota;
})

//as linhas anteriores do código fazem o mesmo que as seguintes. Notemos que o parametro da função é a própria nota. O uso das arrow functions são mais comuns.
// notas.forEach(function(nota) {
//    somaParcial += nota;
// }
    
let media = somaParcial/notas.length;

console.log(media);


// A DIFERENÇA ENTRE OS MÉTODOS map E forEach SÃO SEU RETORNOS! ENQUANTO O PRIMEIRO RETORNA UMA NOVA STRING, O SEGUNDO NÃO RETORNA NADA!