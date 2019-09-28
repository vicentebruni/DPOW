/* 
 * funciones matemáticas sobre un pagina
 */
//funcion sumar
/*
window.setInterval(function(){llegue();},2000);

function llegue(){
    alert("llegué");
}
*/

function sumar(){
    var sum1, sum2;
    sum1 = document.getElementById("s1");
    sum2 = document.getElementById("s2");
    sum1 = sum1.value;
    sum2 = sum2.value;
    sum1= parseInt(sum1);
    sum2= parseInt(sum2);
    alert( sum1 + " + " + sum2 + " = " + (sum1+sum2));
}


