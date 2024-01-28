FUTBOL

a=1
let equipos = new Array (8); 
 
for (let i=0  ; i < 8; i++)
{
console.log("Equipo",a);
equipos[i] = prompt();
a++
}

let semifinalistas = new Array (4); 
console.log("Cuartos");

b=0;
for (let i=0  ; i < 8; i++){
console.log(equipos[i], "-" ,equipos[i+1]);
 semifinalistas[b] = prompt("Ganador :  ");
i=i+1
b++;
 }
 
 let final = new Array (2); 

console.log("Semifinal");
x=0;
for (let i=0  ; i < 4; i++){
console.log(semifinalistas[i], "-" ,semifinalistas[i+1]);
final[x] = prompt("Ganador ");
i=i+1
x++;
 }

  console.log("Finales");
 console.log(final[0], "-" ,final[1]);
 campeon = prompt( "Ganador  :  ");
 
  console.log("El campeon es :", campeon);

