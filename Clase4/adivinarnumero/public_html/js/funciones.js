function adivinar(){
    var desde=document.getElementById("numminimo").value;
    var hasta=document.getElementById("nummax").value;
    num=Math.round(hasta-desde) * Math.random() + desde;
    num=Math.round(num);
    var i = 0;
    while(i<3){
        var ing = parseInt(prompt("Ingrese numero entre " + desde + " y " + hasta + ": "));
        if (ing === num){
            alert("Bien. El número era " + ing + ". ¡Lo adivinaste!");
            break;
        }
        i++;
    }
    if (ing !== num){
        alert("Lo siento. El número era " + num + ". ¡Game over!");
    }
    
    
}

