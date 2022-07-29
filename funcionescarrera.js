	var X1,X2,X3,Y1,Y2,Y3;

      function aleatorio() { 
        var al=Math.round(Math.random()*20);       
        return (al);
      }

      function dibujar() {
        if ((X1>900)||(X2>900)||(X3>900)) {
          clearInterval(id);
          if (X1>900) {
            alert ("El ganador es el cuadrito amarillo!!");
          } else {
            if (X2>900) {
              alert ("El ganador es el cuadrito rojo!!");
            } else {
              alert ("El ganador es el cuadrito azul!!");
            }
          }
		}
        X1=X1+aleatorio();
        document.getElementById('cuadrito1').style.left=X1;dibu("c1");
        X2=X2+aleatorio();
        document.getElementById('cuadrito2').style.left=X2;dibu("c2");
        X3=X3+aleatorio();
        document.getElementById('cuadrito3').style.left=X3;dibu("c3");
      }

      function inicio() {
        X1=190; X2=190; X3=190;
        document.getElementById('cuadrito1').style.left=X1;dibu("c1");
        document.getElementById('cuadrito2').style.left=X2;dibu("c2");
        document.getElementById('cuadrito3').style.left=X3;dibu("c3");
      }

      function largada() {
        X1=200; Y1=100; X2=200; Y2=200; X3=200; Y3=300; 
        id=setInterval("dibujar()",100);
      }
	  
	  function dibu (d) {
	  var l=document.getElementById(d);
      if(l.getContext) {
      var led=l.getContext("2d");
      led.beginPath();
	  led.lineTo(7,16);
      led.arc(7,17,3,0,2*Math.PI);
	  moveTo(23,17);
      led.arc(23,17,3,0,2*Math.PI);	  
      led.stroke();
      led.fillStyle="#000000";
      led.fill();
   }
  }
  
  
  
	 
	  
	  
