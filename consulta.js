function valida_envio(){
    var nom=document.fvalida.nombre.value
     if (nom.length==0)
                         {
                                 alert("Tiene que escribir su Nombre")
                                 document.fvalida.nombre.focus()
                                 return 0;
                         }  
     
     
     var e=document.fvalida.telefono.value;
     if(!Number.parseInt(e))
     {
         alert("debe completar el dato Telefono con un nùmero entero")
         document.fvalida.telefono.focus();
         return false;
     }
        
     var com=document.fvalida.mensaje.value
     if(com.length>200 || com.length<1)
     {
         alert("Debe dejar un Mensaje")
         document.fvalida.nombre.focus()
         return 0;
     }
     
    
     alert("Mensaje enviado");
     
     document.fvalida.submit();
 
 }