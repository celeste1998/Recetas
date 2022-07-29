
   function cambia (){
    c=document.getElementById("color").value;
    if (c=="blanco"){
     color="#ffffff";
    }
     else if (c=="negro"){
      color="#000000";
    }
    else if (c=="rosa") {
      color="#ff8888";
    }  
    else if (c=="azul") {
        color="#0000ff";
      }    
      else if (c=="marron") {
        color="#A52A2A";
      }   
      else if (c=="verde") {
        color="#008000";
      } 
      else if (c=="naranja") {
        color="#ffa500";
      } 
      else if (c=="celeste") {
        color="#add8e6";
      } 
      else if (c=="rojo") {
        color="#ff0000";
      } 

    document.getElementById("capa").style.backgroundColor=color;
   }
