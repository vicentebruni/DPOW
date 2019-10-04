function calcular(){
    var nombre, honorario, retencion, liquido;
    nombre=document.getElementById("txtNombre");
    nombre=nombre.value;
    honorario=document.getElementById("txtHonorario");
    honorario=honorario.value;
    honorario=parseInt(honorario);
    retencion=((honorario)*0.1);
    liquido=honorario-retencion;
    alert("Para " + nombre +":\nHonorario: "+honorario+"\nRetencion: "+retencion+"\nLíquido: "+liquido);
    
}

