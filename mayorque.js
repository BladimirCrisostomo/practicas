MAYORES QUE

numero = prompt("ingresa cuanto numeros quieres leer ");
let numeros = new Array(numero);
for (let i = 0 ; i < numero; i++)
{
numeros[i] = prompt("Agregar un numero  :  ");
}
comp = prompt("Numero que se va a comparar:  ");
a=0
i=0;
for (let j = 0 ; j < numero; j++)
{
if (comp<numeros[i])
a=a+1;
i++
}
console.log("La cantidad de numeros mayores al numero escogido es:  ",a);
