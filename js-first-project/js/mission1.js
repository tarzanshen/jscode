function number(n, m) {
  return Math.round(Math.random() * (m - n));
}

/*function color16() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgb = 'rgb' + '(' + r + ',' + g + ',' + b + ')';
  //console.log(rgb);
  return rgb;

}*/
function color16(){
  var color = "#";
  for( var i = 0; i < 6; i++ ){
      color += Math.floor( Math.random()*16).toString(16);   
  }
  //console.log(color);
  return color; 
}
/*
var tenNumber =new Array;
for(var i=0;i<3;i++){
    var x=number(1,9);
  if(-1==tenNumber.indexOf(x)){
    tenNumber.push(x); 
  }
  else {
      i--;
  }
   
}*/
function colors() {
  for(var a=0;a<9;a++) {
    document.getElementsByClassName("div1")[a].style.backgroundColor="#FFC107";
    }
  var tenNumber = new Array;
  for (var i = 0; i < 3; i++) {
    var x = number(1, 9);
    if (-1 == tenNumber.indexOf(x)) {
      tenNumber.push(x);
    } else {
      i--;
    }

  }
  var x;
  var y;
  for (x in tenNumber) {
    document.getElementsByClassName("div1")[tenNumber[x]].style.backgroundColor = color16();
  }
}


function bgColor() {
  for(var a=0;a<9;a++) {
   document.getElementsByClassName("div1")[a].style.backgroundColor="#FFC107";
   }
}

var timer=null;
var c = 0
function click1() {
  c++;
  console.log(c);
  if(c==1){
  start();
  }
}
function start(){
  
  document.getElementById("button").style.backgroundColor="#FFC107";
  document.getElementById("button").style.color="#ffffff";
  document.getElementById("button2").style.backgroundColor="#ffffff";
  document.getElementById("button2").style.color="#FFC107";
timer=setInterval(colors,1000);

//timer2=setInterval(bgColor,1850);

}

function end() {
  document.getElementById("button2").style.backgroundColor="#FFC107";
  document.getElementById("button2").style.color="#ffffff";
  document.getElementById("button").style.backgroundColor="#ffffff";
  document.getElementById("button").style.color="#FFC107";
  clearInterval(timer);
  for(var a=0;a<9;a++) {
    document.getElementsByClassName("div1")[a].style.backgroundColor="#FFC107";
    }
    c=0;
  //clearInterval(timer2)
}