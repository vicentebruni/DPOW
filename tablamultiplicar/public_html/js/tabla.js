/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function calcular(){
    var numero;
    numero = document.getElementById("tablaDel");
    numero = parseInt(numero.value);
    for (i = 0; i <=numero; i++) {
        alert(i + " * " + numero +  " = " + (i*numero)) ;
    }
    alert(numero);
}

