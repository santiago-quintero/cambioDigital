  var texto0 = document.getElementById("cambiodp");
  var boton0 = document.getElementById("dolarap");
  var texto1 = document.getElementById("cambiopd");
  var boton1 = document.getElementById("pesoad");
  var dolares = 4200;
  var result;
  var cambio
  var cambio_final;
  var lineas = 30;
  var l = 0;
  
  var textoHtml  = document.getElementById('c')
  var textoHtml1 =document.getElementById('w')
  
  

  boton0.addEventListener("click", chanse_Dolar);
  boton1.addEventListener("click", chanse_Peso);

 


function chanse_Dolar()
{

result=parseInt(texto0.value)
cambio = result*dolares


if (texto0.value)
  {
    textoHtml.innerHTML="el cambio solicidado es "+ cambio+ "pesos cop";
    document.getElementById("cambiosdg").reset();
  }
else 
  {
  alert("pon un  valor a cambiar")
  }

}




function chanse_Peso()
{
dinero_cambiar=parseInt(texto1.value)
cambio = parseInt(dinero_cambiar/dolares)


if (texto1.value)
  {
  textoHtml1.innerHTML="el cambio solicidad de "+texto1.value +" pesos es  "+ cambio+" dolares";
  document.getElementById("cambiosd").reset();
  }
else 
  {
  alert("pon un  valor a cambiar")
  }

}

