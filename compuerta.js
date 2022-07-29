var a=0;
var b=0;
var c=0;
var d=0;

function boton (bot) {
	if (bot==0) {
		bot=1;
	} else {
		bot=0;
    }	
	return bot;
}	

function dibujarAnd (n){
 var m=document.getElementById(n);
 if(m.getContext) {
 var lz=m.getContext("2d");
 lz.beginPath ();
 lz.moveTo (1,1);
 lz.lineTo (30,1);
 lz.bezierCurveTo (55,10,55,35,30,45);
 lz.lineTo (1,45);
 lz.lineTo (1,1);
 lz.stroke ();
 lz.fillStyle="#000000";
 lz.fill(); 
 }
}


function dibujarNeg(ne){
 var n=document.getElementById(ne);
 if(n.getContext) {
  var ln=n.getContext("2d");
 ln.beginPath();
 ln.moveTo(1,1);
 ln.lineTo(10,8);
 ln.lineTo(1,10);
 ln.lineTo(1,1);
 ln.stroke ();
 ln.fillStyle="#000000";
 ln.fill();
 }
}

function dibujarOr(or){
 var o=document.getElementById(or);
 if(o.getContext) {
  var coo=o.getContext("2d");
coo.beginPath();
coo.moveTo(1,1);
coo.bezierCurveTo(25,5,50,15,70,40);
coo.bezierCurveTo(50,65,25,75,1,80);
coo.bezierCurveTo(18,55,18,35,1,1);
coo.stroke();
coo.fillStyle="#000000";
coo.fill();
  }
 }
 
 function dibujarLed(le){
  var l=document.getElementById(le);
 if(l.getContext) {
  var led=l.getContext("2d");
   led.beginPath();
   led.arc(12,10,8,0,2*Math.PI);
   led.stroke();
   led.fillStyle="#000000";
   led.fill();
   }
 }

  function encenderLed(le){
  var l=document.getElementById(le);
 if(l.getContext) {
  var led=l.getContext("2d");
   led.beginPath();
   led.arc(12,10,8,0,2*Math.PI);
   led.stroke();
   led.fillStyle="#ff0000";
   led.fill();
   }
 }


 
 
function dibujar() {

  dibujarAnd("and1");
  dibujarAnd("and2");
  dibujarAnd("and3");
  dibujarAnd("and4");
  dibujarAnd("and5");
  dibujarAnd("and6");
  dibujarNeg("neg1");
  dibujarNeg("neg2");
  dibujarNeg("neg3");
  dibujarNeg("neg4");
  dibujarNeg("neg5");
  dibujarNeg("neg6");
  dibujarNeg("neg7");
  dibujarNeg("neg8");
  dibujarNeg("neg9");
  dibujarNeg("neg10");
  dibujarNeg("neg11");
  dibujarNeg("neg12");  
  dibujarOr("or1");  
  dibujarLed("led1"); 
 }
  
  function muestra () {
    alert(a+' '+b+' '+c+' '+d);
}
  
function encender(n) {
  document.getElementById(n).style.background="#ff0000";
  }
  
 function apagar(n) {
  document.getElementById(n).style.background="#000000";
  }
  
  function evaluar() {
  
 if ((a==0)&&(b==0)&&(c==0)&&(d==0)){
 
   apagar("linea4");
   apagar("linea3");
   apagar("linea2");
   apagar("linea1");
   apagar("cable1");
   encender("lin1");
   apagar("cable2");
   encender("lin2");
   apagar("cable3");
   encender("lin3");
   apagar("cable4");
   encender("lin4");
   encender("seglin1");
   encender("seglin2");
   encender("seglin3");
   encender("linealed");
   encenderLed("led1");
   apagar("cable5");
   encender("lin5");
   apagar("cable6");
   encender("lin6");
   apagar("cable7");
   apagar("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   apagar("cable9");
   encender("lin11");
   apagar("cable10");
   apagar("cable11");
   encender("lin8");
   apagar("cable12");
   apagar("seglin7");
   apagar("cable13");
   apagar("cable14");
   encender("lin9");
   apagar("cable15");
   apagar("cable16");
   encender("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("cable17");
   apagar("cable18");
   apagar("cable19");
   encender("lin7");
   apagar("cable20");
   encender("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   apagar("cable21");
   apagar("cable22");
   apagar("cable23");
   apagar("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
   
  }
  if ((a==0)&&(b==0)&&(c==0)&&(d==1)){
   
   encender("linea4");
   apagar("linea3");
   apagar("linea2");
   apagar("linea1");
   apagar("cable1");
   encender("lin1");
   apagar("cable2");
   encender("lin2");
   apagar("cable3");
   encender("lin3");
   encender("cable4");
   apagar("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   apagar("linealed");
   dibujarLed("led1");
   apagar("cable5");
   encender("lin5");
   apagar("cable6");
   encender("lin6");
   apagar("cable7");
   encender("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   apagar("cable9");
   encender("lin11");
   apagar("cable10");
   apagar("cable11");
   encender("lin8");
   encender("cable12");
   apagar("seglin7");
   apagar("cable13");
   apagar("cable14");
   encender("lin9");
   apagar("cable15");
   encender("cable16");
   apagar("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("cable17");
   apagar("cable18");
   apagar("cable19");
   encender("lin7");
   encender("cable20");
   apagar("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   apagar("cable21");
   apagar("cable22");
   apagar("cable23");
   encender("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16"); 
  }
  
  if ((a==0)&&(b==0)&&(c==1)&&(d==0)){
   
   apagar("linea4");
   encender("linea3");
   apagar("linea2");
   apagar("linea1");
   apagar("cable1");
   encender("lin1");
   apagar("cable2");
   encender("lin2");
   encender("cable3");
   apagar("lin3");
   apagar("cable4");
   encender("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   apagar("linealed");
   dibujarLed("led1");
   apagar("cable5");
   encender("lin5");
   apagar("cable6");
   encender("lin6");
   encender("cable7");
   apagar("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   apagar("cable9");
   apagar("lin11");
   apagar("cable10");
   encender("cable11");
   encender("lin8");
   apagar("cable12");
   apagar("seglin7");
   apagar("cable13");
   apagar("cable14");
   encender("lin9");
   encender("cable15");
   apagar("cable16");
   encender("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("cable17");
   apagar("cable18");
   encender("cable19");
   apagar("lin7");
   apagar("cable20");
   encender("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   apagar("cable21");
   apagar("cable22");
   encender("cable23");
   apagar("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
  
  }
  
  if ((a==0)&&(b==0)&&(c==1)&&(d==1)){
   
   encender("linea4");
   encender("linea3");
   apagar("linea2");
   apagar("linea1");
   apagar("cable1");
   encender("lin1");
   apagar("cable2");
   encender("lin2");
   encender("cable3");
   apagar("lin3");
   encender("cable4");
   apagar("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   apagar("cable5");
   encender("lin5");
   apagar("cable6");
   encender("lin6");
   encender("cable7");
   encender("cable8");
   encender("seglin4");
   encender("seglin5");
   encender("seglin6");
   encender("linealed");
   encenderLed("led1");
   apagar("cable9");
   apagar("lin11");
   apagar("cable10");
   encender("cable11");
   encender("lin8");
   encender("cable12");
   apagar("seglin7");
   apagar("cable13");
   apagar("cable14");
   encender("lin9");
   encender("cable15");
   encender("cable16");
   apagar("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("cable17");
   apagar("cable18");
   encender("cable19");
   apagar("lin7");
   encender("cable20");
   apagar("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   apagar("cable21");
   apagar("cable22");
   encender("cable23");
   encender("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
   
  }
  
  if ((a==0)&&(b==1)&&(c==0)&&(d==0)){
   
   apagar("linea4");
   apagar("linea3");
   encender("linea2");
   apagar("linea1");
   apagar("cable1");
   encender("lin1");
   encender("cable2");
   apagar("lin2");
   apagar("cable3");
   encender("lin3");
   apagar("cable4");
   encender("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   apagar("cable5");
   encender("lin5");
   encender("cable6");
   apagar("lin6");
   apagar("cable7");
   apagar("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   apagar("linealed");
   dibujarLed("led1");
   apagar("cable9");
   encender("lin11");
   encender("cable10");
   apagar("cable11");
   encender("lin8");
   apagar("cable12");
   apagar("seglin7");
   apagar("cable13");
   encender("cable14");
   apagar("lin9");
   apagar("cable15");
   apagar("cable16");
   encender("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("cable17");
   encender("cable18");
   apagar("cable19");
   encender("lin7");
   apagar("cable20");
   encender("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   apagar("cable21");
   encender("cable22");
   apagar("cable23");
   apagar("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
   
  }
  if ((a==0)&&(b==1)&&(c==0)&&(d==1)){
   
   encender("linea4");
   apagar("linea3");
   encender("linea2");
   apagar("linea1");
   apagar("cable1");
   encender("lin1");
   encender("cable2");
   apagar("lin2");
   apagar("cable3");
   encender("lin3");
   encender("cable4");
   apagar("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   apagar("cable5");
   encender("lin5");
   encender("cable6");
   apagar("lin6");
   apagar("cable7");
   encender("cable8");
   encender("seglin4");
   encender("seglin5");
   encender("seglin6");
   apagar("cable9");
   encender("lin11");
   encender("cable10");
   apagar("cable11");
   encender("lin8");
   encender("cable12");
   encender("seglin7");
   apagar("cable13");
   encender("cable14");
   apagar("lin9");
   apagar("cable15");
   encender("cable16");
   apagar("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   encender("linealed");
   encenderLed("led1");
   apagar("cable17");
   encender("cable18");
   apagar("cable19");
   encender("lin7");
   encender("cable20");
   apagar("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   apagar("cable21");
   encender("cable22");
   apagar("cable23");
   encender("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
   
  }
  if ((a==0)&&(b==1)&&(c==1)&&(d==0)){
   
   apagar("linea4");
   encender("linea3");
   encender("linea2");
   apagar("linea1");
   apagar("cable1");
   encender("lin1");
   encender("cable2");
   apagar("lin2");
   encender("cable3");
   apagar("lin3");
   apagar("cable4");
   encender("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   apagar("cable5");
   encender("lin5");
   encender("cable6");
   apagar("lin6");
   encender("cable7");
   apagar("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   apagar("cable9");
   apagar("lin11");
   encender("cable10");
   encender("cable11");
   encender("lin8");
   apagar("cable12");
   apagar("seglin7");
   apagar("cable13");
   encender("cable14");
   apagar("lin9");
   encender("cable15");
   apagar("cable16");
   encender("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("linealed");
   dibujarLed("led1");
   apagar("cable17");
   encender("cable18");
   encender("cable19");
   apagar("lin7");
   apagar("cable20");
   encender("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   apagar("cable21");
   encender("cable22");
   encender("cable23");
   apagar("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
   
  }
  
  if ((a==0)&&(b==1)&&(c==1)&&(d==1)){
   
   encender("linea4");
   encender("linea3");
   encender("linea2");
   apagar("linea1");
   apagar("cable1");
   encender("lin1");
   encender("cable2");
   apagar("lin2");
   encender("cable3");
   apagar("lin3");
   encender("cable4");
   apagar("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   apagar("cable5");
   encender("lin5");
   encender("cable6");
   apagar("lin6");
   encender("cable7");
   encender("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   apagar("cable9");
   apagar("lin11");
   encender("cable10");
   encender("cable11");
   encender("lin8");
   encender("cable12");
   apagar("seglin7");
   apagar("cable13");
   encender("cable14");
   apagar("lin9");
   encender("cable15");
   encender("cable16");
   apagar("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("linealed");
   dibujarLed("led1");
   apagar("cable17");
   encender("cable18");
   encender("cable19");
   apagar("lin7");
   encender("cable20");
   apagar("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   apagar("cable21");
   encender("cable22");
   encender("cable23");
   encender("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
   
   }
   
   if ((a==1)&&(b==0)&&(c==0)&&(d==0)){
   
   apagar("linea4");
   apagar("linea3");
   apagar("linea2");
   encender("linea1");
   encender("cable1");
   apagar("lin1");
   apagar("cable2");
   encender("lin2");
   apagar("cable3");
   encender("lin3");
   apagar("cable4");
   encender("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   encender("cable5");
   apagar("lin5");
   apagar("cable6");
   encender("lin6");
   apagar("cable7");
   apagar("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   encender("cable9");
   encender("lin11");
   apagar("cable10");
   apagar("cable11");
   apagar("lin8");
   apagar("cable12");
   apagar("seglin7");
   encender("cable13");
   apagar("cable14");
   encender("lin9");
   apagar("cable15");
   apagar("cable16");
   encender("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("linealed");
   dibujarLed("led1");
   encender("cable17");
   apagar("cable18");
   apagar("cable19");
   encender("lin7");
   apagar("cable20");
   encender("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   encender("cable21");
   apagar("cable22");
   apagar("cable23");
   apagar("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
  }
  
  if ((a==1)&&(b==0)&&(c==0)&&(d==1)){
   
   encender("linea4");
   apagar("linea3");
   apagar("linea2");
   encender("linea1");
   encender("cable1");
   apagar("lin1");
   apagar("cable2");
   encender("lin2");
   apagar("cable3");
   encender("lin3");
   encender("cable4");
   apagar("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   encender("cable5");
   apagar("lin5");
   apagar("cable6");
   encender("lin6");
   apagar("cable7");
   encender("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   encender("cable9");
   encender("lin11");
   apagar("cable10");
   apagar("cable11");
   apagar("lin8");
   encender("cable12");
   apagar("seglin7");
   encender("cable13");
   apagar("cable14");
   encender("lin9");
   apagar("cable15");
   encender("cable16");
   apagar("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("linealed");
   dibujarLed("led1");
   encender("cable17");
   apagar("cable18");
   apagar("cable19");
   encender("lin7");
   encender("cable20");
   apagar("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   encender("cable21");
   apagar("cable22");
   apagar("cable23");
   encender("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
  }
  if ((a==1)&&(b==0)&&(c==1)&&(d==0)){
   
   apagar("linea4");
   encender("linea3");
   apagar("linea2");
   encender("linea1");
   encender("cable1");
   apagar("lin1");
   apagar("cable2");
   encender("lin2");
   encender("cable3");
   apagar("lin3");
   apagar("cable4");
   encender("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   encender("cable5");
   apagar("lin5");
   apagar("cable6");
   encender("lin6");
   encender("cable7");
   apagar("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   encender("cable9");
   apagar("lin11");
   apagar("cable10");
   encender("cable11");
   apagar("lin8");
   apagar("cable12");
   apagar("seglin7");
   encender("cable13");
   apagar("cable14");
   encender("lin9");
   encender("cable15");
   apagar("cable16");
   encender("lin10");
   encender("seglin8");
   encender("seglin9");
   encender("seglin10");
   encender("linealed");
   encenderLed("led1");
   encender("cable17");
   apagar("cable18");
   encender("cable19");
   apagar("lin7");
   apagar("cable20");
   encender("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   encender("cable21");
   apagar("cable22");
   encender("cable23");
   apagar("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
   }
   
   if ((a==1)&&(b==0)&&(c==1)&&(d==1)){
   
   encender("linea4");
   encender("linea3");
   apagar("linea2");
   encender("linea1");
   encender("cable1");
   apagar("lin1");
   apagar("cable2");
   encender("lin2");
   encender("cable3");
   apagar("lin3");
   encender("cable4");
   apagar("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   encender("cable5");
   apagar("lin5");
   apagar("cable6");
   encender("lin6");
   encender("cable7");
   encender("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   encender("cable9");
   apagar("lin11");
   apagar("cable10");
   encender("cable11");
   apagar("lin8");
   encender("cable12");
   apagar("seglin7");
   encender("cable13");
   apagar("cable14");
   encender("lin9");
   encender("cable15");
   encender("cable16");
   apagar("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("linealed");
   dibujarLed("led1");
   encender("cable17");
   apagar("cable18");
   encender("cable19");
   apagar("lin7");
   encender("cable20");
   apagar("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   encender("cable21");
   apagar("cable22");
   encender("cable23");
   encender("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
  }
  if ((a==1)&&(b==1)&&(c==0)&&(d==0)){
   
   apagar("linea4");
   apagar("linea3");
   encender("linea2");
   encender("linea1");
   encender("cable1");
   apagar("lin1");
   encender("cable2");
   apagar("lin2");
   apagar("cable3");
   encender("lin3");
   apagar("cable4");
   encender("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   encender("cable5");
   encender("lin5");
   encender("cable6");
   apagar("lin6");
   apagar("cable7");
   apagar("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   encender("cable9");
   encender("lin11");
   encender("cable10");
   apagar("cable11");
   apagar("lin8");
   apagar("cable12");
   apagar("seglin7");
   encender("cable13");
   encender("cable14");
   apagar("lin9");
   apagar("cable15");
   apagar("cable16");
   encender("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("linealed");
   dibujarLed("led1");
   encender("cable17");
   encender("cable18");
   apagar("cable19");
   encender("lin7");
   apagar("cable20");
   encender("lin12");
   encender("seglin11");
   encender("seglin12");
   encender("seglin13");
   encender("cable21");
   encender("cable22");
   apagar("cable23");
   apagar("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
   }
     if ((a==1)&&(b==1)&&(c==0)&&(d==1)){
   
   encender("linea4");
   apagar("linea3");
   encender("linea2");
   encender("linea1");
   encender("cable1");
   apagar("lin1");
   encender("cable2");
   apagar("lin2");
   apagar("cable3");
   encender("lin3");
   encender("cable4");
   apagar("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   encender("cable5");
   apagar("lin5");
   encender("cable6");
   apagar("lin6");
   apagar("cable7");
   encender("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   encender("cable9");
   encender("lin11");
   encender("cable10");
   apagar("cable11");
   apagar("lin8");
   encender("cable12");
   apagar("seglin7");
   encender("cable13");
   encender("cable14");
   apagar("lin9");
   apagar("cable15");
   encender("cable16");
   apagar("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("linealed");
   dibujarLed("led1");
   encender("cable17");
   encender("cable18");
   apagar("cable19");
   encender("lin7");
   encender("cable20");
   apagar("lin12");
   encender("seglin11");
   encender("seglin12");
   encender("seglin13");
   encender("cable21");
   encender("cable22");
   apagar("cable23");
   encender("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
   }
    if ((a==1)&&(b==1)&&(c==1)&&(d==0)){
   
   apagar("linea4");
   encender("linea3");
   encender("linea2");
   encender("linea1");
   encender("cable1");
   apagar("lin1");
   encender("cable2");
   apagar("lin2");
   encender("cable3");
   apagar("lin3");
   apagar("cable4");
   encender("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   encender("cable5");
   apagar("lin5");
   encender("cable6");
   apagar("lin6");
   encender("cable7");
   apagar("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   encender("cable9");
   apagar("lin11");
   encender("cable10");
   encender("cable11");
   apagar("lin8");
   apagar("cable12");
   apagar("seglin7");
   encender("cable13");
   encender("cable14");
   apagar("lin9");
   encender("cable15");
   apagar("cable16");
   encender("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   apagar("linealed");
   dibujarLed("led1");
   encender("cable17");
   encender("cable18");
   encender("cable19");
   apagar("lin7");
   apagar("cable20");
   encender("lin12");
   encender("seglin11");
   encender("seglin12");
   encender("seglin13");
   encender("cable21");
   encender("cable22");
   encender("cable23");
   apagar("cable24");
   apagar("seglin14");
   apagar("seglin15");
   apagar("seglin16");
   }
   if ((a==1)&&(b==1)&&(c==1)&&(d==1)){
   
   encender("linea4");
   encender("linea3");
   encender("linea2");
   encender("linea1");
   encender("cable1");
   apagar("lin1");
   encender("cable2");
   apagar("lin2");
   encender("cable3");
   apagar("lin3");
   encender("cable4");
   apagar("lin4");
   apagar("seglin1");
   apagar("seglin2");
   apagar("seglin3");
   encender("cable5");
   apagar("lin5");
   encender("cable6");
   apagar("lin6");
   encender("cable7");
   encender("cable8");
   apagar("seglin4");
   apagar("seglin5");
   apagar("seglin6");
   encender("cable9");
   apagar("lin11");
   encender("cable10");
   encender("cable11");
   apagar("lin8");
   encender("cable12");
   apagar("seglin7");
   encender("cable13");
   encender("cable14");
   apagar("lin9");
   encender("cable15");
   encender("cable16");
   apagar("lin10");
   apagar("seglin8");
   apagar("seglin9");
   apagar("seglin10");
   encender("linealed");
   encenderLed("led1");
   encender("cable17");
   encender("cable18");
   encender("cable19");
   apagar("lin7");
   encender("cable20");
   apagar("lin12");
   apagar("seglin11");
   apagar("seglin12");
   apagar("seglin13");
   encender("cable21");
   encender("cable22");
   encender("cable23");
   encender("cable24");
   encender("seglin14");
   encender("seglin15");
   encender("seglin16");
   }
  }