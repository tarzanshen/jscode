var c = JSON.parse(localStorage.information);
console.log(c);
$("#left").click(function(){
  window.location.href="proportion.html";
})
$("#right").click(function(){
  var r = confirm("是否结束游戏");
  if (r == true) {

      localStorage.clear();
      window.location.href = "proportion.html";
  } else {
      return false;
  }
})
$(document).ready(function(){
$("#left").click(function(){
  window.location.href="proportion2.html";
})
$("right").click(function(){
  var r = confirm("是否结束游戏");
  if (r == true) {

      localStorage.clear();
      window.location.href = "proportion.html";
  } else {
      return false;
  }
})
for ( i = 0; i < c.length-1; i++) {

 $(".people-number").eq(i).html(c[i]);  
    $(".main-people").eq(i).clone().appendTo("#main");
  //document.getElementById("main").appendChild(clone1);
  $("people-number").eq(i+1).html(c[i+1]);
  $(".people-number-bottom").eq(i+1).html((i+2) + "号") ;
}
$("#button2").click(function(){
  window.location.href = "proportion4.html";
})
})



