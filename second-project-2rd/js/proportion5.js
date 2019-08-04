$(document).ready(function () {
    $("#button2").click(function(){

    var r = confirm("是否结束游戏");
    if (r == true) {

        localStorage.clear();
        window.location.href = "proportion.html";
    } else {
        return false;
    }
})
$("#house").click(function(){

    var r = confirm("是否结束游戏");
    if (r == true) {

        localStorage.clear();
        window.location.href = "proportion.html";
    } else {
        return false;
    }
})
 
var topDeathpeople = JSON.parse(localStorage.getItem("deathPeopleinfotop")); //头部数字
var topDeathpeople2 = JSON.parse(localStorage.getItem("deathPeopleinfotop2")); //头部身份
var bottomDeathpeople = JSON.parse(localStorage.getItem("deathPeopleinfobottom")); //底部数字
var bottomDeathpeople2 = JSON.parse(localStorage.getItem("deathPeopleinfobottom2")); //底部身份
var killer1=JSON.parse(localStorage.getItem("killer1"));
var farmer=JSON.parse(localStorage.getItem("farmer"));
$("#killer").html("杀手:"+killer1+"人");
$("#farmer").html("平民:"+farmer+"人");
z = JSON.parse(localStorage.getItem("many"));
for(x=0;x<z+1;x++)
{
    if((topDeathpeople2[x])!=undefined){
        $(".infor-bottom").eq(x).clone().appendTo("#main");
    $(".day").eq(x).html("第"+(x+1)+"天");    
    $(".light").eq(x).html("白天："+topDeathpeople2[x]+"玩家被杀死，他的真实身份是"+topDeathpeople[x])
    }
    if((bottomDeathpeople2[x])!=undefined){
    $(".night").eq(x).html("晚上："+bottomDeathpeople2[x]+"玩家被杀死，他的真实身份是"+bottomDeathpeople[x]);
    }
 
    if(x==z){
        if(x%2!=0){
       $(".infor-bottom").eq(x).css("borderBottom","none");
        }else{
           $(".infor-bottom").eq(x).css("borderBottom","none");
        }
    }
}
})







