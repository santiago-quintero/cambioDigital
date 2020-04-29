var b = document.getElementById("initOperation")
var boton = b.addEventListener("click",saveD)





function saveD()
{
  let name     = document.getElementById("name").value  
  let lastname = document.getElementById("lastname").value
  let gmail    = document.getElementById("email").value
  let bancoE   = document.getElementById("bank0").value
  let bancoR   = document.getElementById("bank1").value  
  let aceptacion;
  let a = false;
  let b = false;
 
  
 

 
  if (name && lastname && gmail &&  bancoE && bancoR )
  {
    
      switch (bancoE)
      {
        case "Bancolombia":
            b = true;
            break;
          
        case "Davivienda":
            b = true;
             break;
            
         case "Scotiabank":  
             b = true;  
              break;
    
         case "Banco de bogota":
               b = true;
               break;
             
          case "Banco sudameris":
               b = true;
               break;   
             
          default:
                 
      }
      
      switch (bancoR)
      {
         case "Bancolombia":
            a = true;
            break;
          
         case "Davivienda":
            a = true;
             break;
            
         case "Scotiabank":  
             a = true;
              break;
    
         case "Banco de bogota":
              a = true;
               break;
             
          case "Banco sudameris":
               a = true;
               break;   
             
          default:
                  
      }
               if (!a && b) 
             {
               alert("el banco que recibe el dinero no tienen convenio con la compañia")
             }
               if (a && !b)
             {
                alert("el banco que envia el dinero no tiene convenio con la compañia")
             }

               if (a && b) 
             {
              alert("transaccion exitosa")
             }
            
             if(!a && !b)
             {
               alert("El banco que envia el dinero y el banco que recibe el dinero no tienen convenio con la compañia")
             }
               
  }
  else
  {
   alert("completa las casillas correctamente")
  }
   
      

      

}   
