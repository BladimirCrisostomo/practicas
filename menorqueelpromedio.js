numero = prompt("Cuantos datos ingresara? ");
let numeros = new Array(numero);

a=0
dato=1
for (let i = 0 ; i < numero; i++)
{
console.log("Dato", dato);
numeros[i] = prompt();
a = a + Number(numeros[i]);
dato++

}
b=a/numero;

c=0
for (let j = 0 ; j < numero; j++){
if (b<numeros[j])
c=c+1;
}

console.log( c, "datos son mayores que el promedio");

