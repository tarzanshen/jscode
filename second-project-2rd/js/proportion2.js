// var x=localStorage.getItem("information");
var c = JSON.parse(localStorage.information);
console.log(c);
$(document).ready(function(){
$("#left").click(function(){
    window.location.href="proportion.html";
})
$("#header-right").click(function(){
    var r = confirm("是否结束游戏");
    if (r == true) {

        localStorage.clear();
        window.location.href = "proportion.html";
    } else {
        return false;
    }
})

a = 2;
b = 1;
d = 0;
$("#info").html("");
$("#button2").click(function(){
    if (a < (c.length) * 2) {
        if (a % 2 == 0) {
           $("#button2").html("隐藏并传递给" + (b + 1) + "号");
           $("#info").html(c[d]) ;
           $("#king").css("backgroundImage","url(../image/card2.png)") ;
        } 
        else {
            b++;
            $("#number2").val(b);
            $("#info").html("");
            $("#button2").html("查看" + b + "号身份");
            $("#king").css("backgroundImage","url(../image/card.png)");
            d++;
        }
        console.log(a);
    } 
    else {
        $("#info").html(c[d]);
        $("#king").css("backgroundImage","url(../image/card2.png)") 
        $("#button2").html("法官查看");
        $("#button2").click(function(){
            window.location.href = "proportion3.html";
        })
        
    }
    a++;
})
})
