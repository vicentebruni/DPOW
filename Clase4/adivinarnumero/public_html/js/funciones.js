function adivinar(){
    //Crear número aleatorio entre los valores recibidos del html
    var desde=document.getElementById("numminimo").value;
    var hasta=document.getElementById("nummax").value;
    num=Math.round(hasta-desde) * Math.random() + desde;
    num=Math.round(num);
    //Verificar que los número coincidan
    var i = 0; var intentosRestantes=3;
    var ing = parseInt(prompt("Adivina el numero entre " + desde + " y " + hasta + ". Tienes 3 intentos!"));
    while(i<2){
        intentosRestantes--;
        if (ing === num){
            alert("Bien. El número era " + ing + ". ¡Lo adivinaste!");
            break;
        }
        else{
            var ing = parseInt(prompt("No es " + ing + "\nTe quedan " + intentosRestantes + " intentos!\nAdivina el numero entre " + desde + " y " + hasta + "."));
        }
        i++;
    }
    if (ing !== num){
        alert("Lo siento. El número era " + num + ". ¡Game over!");
    }
    
    
}

