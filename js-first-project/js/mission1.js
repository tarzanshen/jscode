

/*function color16() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  var rgb = 'rgb' + '(' + r + ',' + g + ',' + b + ')';
  //console.log(rgb);
  return rgb;

}*/
function color16(){//随机16位颜色代码
  var color = "#";
  for( var i = 0; i < 6; i++ ){
      color += Math.floor( Math.random()*16).toString(16);   
  }
  return color; 
  //console.log(color);
  
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
function colors() {//点击函数
  for(var a=0;a<9;a++) {//颜色归位
    document.getElementsByClassName("div1")[a].style.backgroundColor="#FFC107";
  }
  var tenNumber = new Array;//三个随机数字
  for (var i = 0; i < 3; i++) {
    var x = Math.round(Math.random() * 8);
    if (-1 == tenNumber.indexOf(x)) {
      tenNumber.push(x);
    } 
    else {
      i--;
    }
  }

  var x;
  for (x in tenNumber) {//dom绑定随机数字
    document.getElementsByClassName("div1")[tenNumber[x]].style.backgroundColor = color16();
  }
}

var timer=null;
var c = 0
function click1() {//触发器
  c++;
  if(c==1){
  start();
  }
}
function start() {
  var buttonColor= document.getElementById("button")
  var buttonColor2= document.getElementById("button2")
  buttonColor.style.backgroundColor="#FFC107";//上部按钮文字颜色颜色
  buttonColor.style.color="#ffffff";
  buttonColor2.style.backgroundColor="#ffffff";
  buttonColor2.style.color="#FFC107";
timer=setInterval("colors()",1000);
//timer2=setInterval(bgColor,1850);
}

function end() {
  var buttonColor= document.getElementById("button")
  var buttonColor2= document.getElementById("button2")
  buttonColor2.style.backgroundColor="#FFC107";//下部按钮文字
  buttonColor2.style.color="#ffffff";
  buttonColor.style.backgroundColor="#ffffff";
  buttonColor.style.color="#FFC107";
  clearInterval(timer);
  for(var a=0;a<9;a++) {
    document.getElementsByClassName("div1")[a].style.backgroundColor="#FFC107";
    }
    c=0;
  //clearInterval(timer2)
}