
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

let i=0
if(i==7){
alert(dias[i] + " es el dia 7")}

{for(i; i<dias.length; i++){
    if(i==0 || i==2 || i==4 || i==6 ) {
    continue;
}
console.log(dias[i] + " es dia par");}}

