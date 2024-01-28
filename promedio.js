
let a = new Array(3);
let b = new Array(3);
console.log("Ingrese el vector a:");
for (let i = 0 ; i < 3; i++)
{
a[i] = prompt();
}
console.log("a = [", a[0],",",a[1],",",a[2],"]");


console.log("Ingresar el vector b: ");
for (let j = 0 ; j < 3; j++){
b[j] = prompt();
}
console.log("b = [", b[0],",",b[1],",",b[2],"]");

producto=0

for (let k = 0 ; k < 3; k++)
{
suma2=Number(a[k]) * Number(b[k])
producto=producto+suma2;
}
console.log("producto interno entre a y b ", producto);

if (producto==0)
{console.log("a y b son ortogonales");}
else
{console.log("a y b no son ortogonales");}
