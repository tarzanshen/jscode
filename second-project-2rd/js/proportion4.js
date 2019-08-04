$(document).ready(function(){
    var daytime=["一","二","三","四","五","六","七","八","九","十"]; //阿拉伯数字转中文数字
    $("#button3").click(function(){//底部按钮转向法官日志
        window.location.href = "daily.html";
      })
      $("#button2").click(function(){//底部按钮结束游戏
        var r = confirm("是否结束游戏");
        if (r == true) {
      
            localStorage.clear();
            window.location.href = "proportion.html";
        } else {
            return false;
        }
    })
var x = 0;
topVote = false;
z = 0;
for (let c = 0; c <= z; c++) {
    if (c > 0) {
        $(".main-inner").eq(c - 1).clone(false).appendTo("#main-all");
        //克隆数据
        $(".killer-2").unbind("bind");
        $(".button-color").css("backgroundColor","rgb(128,128,128)");
        //往期天数按钮变灰
        $(".main").eq(c-1).css("display","none");
        //往期天数默认隐藏
        $(".main-triangle").eq(c - 1).css("display","none");//天数下方三角形隐藏
        var topDeathpeople = JSON.parse(localStorage.getItem("deathPeopleinfotop")); //头部数字
        var topDeathpeople2 = JSON.parse(localStorage.getItem("deathPeopleinfotop2")); //头部身份
        $(".people-information").eq(c - 1).html(topDeathpeople2[c - 1] + "被杀死，他的真实身份是" + topDeathpeople[c - 1]);
        //往期天数头部阵亡信息
        $(".people-bottom-information").eq(c - 1).css("display","block");
        //头部数据显示
        var bottomDeathpeople = JSON.parse(localStorage.getItem("deathPeopleinfobottom")); //底部数字
        var bottomDeathpeople2 = JSON.parse(localStorage.getItem("deathPeopleinfobottom2")); //底部身份
        $(".people-bottom-information").eq(c-1).html(bottomDeathpeople2[c - 1] + "被杀死，他的真实身份是" + bottomDeathpeople[c - 1]);
        //往期天数底部阵亡信息
        
        $(".killer-1").eq(c-1).off("click").click(function(){
            alert("请按顺序来");
            return false;
        })       
         $(".killer-2").eq(c-1).off("click").click(function(){
            alert("请按顺序来");
            return false;
         })
         $(".killer-3").eq(c-1).off("click").click(function(){
             alert("请按顺序来");
             return false;8
         })
         $(".killer-4").eq(c-1).off("click").click(function(){
             alert("请按顺序来");
             return false;
         })
         //往期天数设置不可触发       
    }

    peopleVote = false;//底部信息默认不显示条件
    //按键变蓝
    $(".killer-1").eq(c).css("backgroundColor","rgb(41,189,224)");
    $(".killer-2").eq(c).css("backgroundColor","rgb(41,189,224)");
    $(".killer-3").eq(c).css("backgroundColor","rgb(41,189,224)");
    $(".killer-4").eq(c).css("backgroundColor","rgb(41,189,224)"); 
    $(".state-top").eq(c).css("display","none");

    //伸缩动画
   $(".day").eq(c).click(function(){
    $(".main").eq(c).slideToggle("slow");
    if($(".main-triangle").eq(c).css("display")=="block"){
        $(".main-triangle").eq(c).css("display","none");
    }else{
        $(".main-triangle").eq(c).css("display","block");
    }
   })

    kill = JSON.parse(localStorage.getItem("kill"));//顺序触发本地存储
    kill=0;//四个按钮顺序触发条件
    number2=0;//按钮2状态变量
    number3=0;//按钮3状态变量
    $(".daytime").eq(c).html("第" + daytime[c] + "天"); //顶部天数
    $(".killer-1").eq(c).click(function(){ //按钮一      
        if (kill == 0) { //杀手杀人
            kill++;
            allPeopleVote = false;//判定转向杀人界面是头部还是底部
            localStorage.vote = JSON.stringify(allPeopleVote);
            window.location.href = "vote.html";
            topVote = true;//头部条件触发显示
            localStorage.topVote = JSON.stringify(topVote);
            peopleVote = false;//底部条件隐藏
            localStorage.vote = JSON.stringify(peopleVote);
            topInfo = "block";
            localStorage.topInfo = JSON.stringify(topInfo); //顶部信息显示
        } else {
             alert("请按顺序来");
        }
    })

    topInfo = JSON.parse(localStorage.getItem("topInfo")); //信息display
    $(".state-top").eq(c).css("display",topInfo);//头部信息显示
    $(".killer-2").eq(c).click(function(){//按钮二
        if (kill == 1) { //亡灵发表遗言
            alert("亡灵发表遗言");
            $(".killer-2").eq(c).css("backgroundColor","rgb(128,128,128)");
            kill=0;
            localStorage.kill2=JSON.stringify(kill);
            kill=1;//按钮二状态
            localStorage.number2=JSON.stringify(kill);
            kill++;
            localStorage.kill=JSON.stringify(kill);
        } 
        else {
            alert("请按顺序来");
        }
    })

    number2=JSON.parse(localStorage.getItem("number2"));
    if(number2==1){//按钮二状态判定
        $(".killer-2").eq(c).css("backgroundColor","rgb(128,128,128)");
    }

    $(".killer-3").eq(c).click(function(){ //按钮三
        x=JSON.parse(localStorage.getItem("kill"));
        if(x!=null){//判断是否第一次触发按钮三
            kill=JSON.parse(localStorage.getItem("kill"));
        }
        if (kill == 2) { //玩家依次发言
            alert("玩家依次发言");
            $(".killer-3").eq(c).css("backgroundColor","rgb(128,128,128)");
            localStorage.number3=JSON.stringify(kill);//保存按钮三状态
            kill++;
            localStorage.kill=JSON.stringify(kill);
        } else {
            alert("请按顺序来");
        }
        console.log(c);
    })

    number3=JSON.parse(localStorage.getItem("number3"));
    w=JSON.parse(localStorage.getItem("kill"));
        if(w!=null){
            kill=JSON.parse(localStorage.getItem("kill"));
        }
    if(number3==2){//按钮三状态判定
        $(".killer-3").eq(c).css("backgroundColor","rgb(128,128,128)");
    }
    $(".killer-4").eq(c).click(function(){ //按钮四
        if (kill == 3) { //全民投票
            $(".killer-4").eq(c).css("backgroundColor","rgb(128,128,128)");
            z++;//天数增加
            localStorage.many = JSON.stringify(z); //天数控制
            peopleVote = true;//判定底部数据是否显示
            localStorage.vote = JSON.stringify(peopleVote); //全民投票判断
            window.location.href = "vote.html";
            topVote = false;//条件触发头部信息隐藏
            localStorage.topVote = JSON.stringify(topVote);
            kill=0;
            localStorage.kill=JSON.stringify(kill);//判断条件重置为button1状态
            number2=0;
            localStorage.number2=JSON.stringify(number2);//button2状态
            number3=0;
            localStorage.number3=JSON.stringify( number3);//button3状态
        } else {
            alert("请按顺序来");
        }
    })
    topVote = JSON.parse(localStorage.getItem("topVote"));
    if (topVote == true) { //顶部数据
        var topDeathpeople = JSON.parse(localStorage.getItem("deathPeopleinfotop")); //头部数字
        var topDeathpeople2 = JSON.parse(localStorage.getItem("deathPeopleinfotop2")); //头部身份
        $(".people-information").eq(c).html(topDeathpeople2[c] + "被杀死，他的真实身份是" + topDeathpeople[c]);
        $(".killer-1").eq(c).css("backgroundColor","rgb(128,128,128)");
        //头部数据显示
    }
    peopleVote = JSON.parse(localStorage.getItem("vote")); //底部数据
    if (peopleVote == true) {
        var bottomDeathpeople = JSON.parse(localStorage.getItem("deathPeopleinfobottom")); //底部数字
        var bottomDeathpeople2 = JSON.parse(localStorage.getItem("deathPeopleinfobottom2")); //底部身份
        $(".people-bottom-information").eq(c).html(bottomDeathpeople2[c] + "被杀死，他的真实身份是" + bottomDeathpeople[c]);
        peopleVote = false;
        localStorage.vote = JSON.stringify(peopleVote);
        $(".people-bottom-information").eq(c).css("display","none");
    }
    z = JSON.parse(localStorage.getItem("many")); //天数叠加
}
$("#left").click(function(){
    window.location.href="proportion3.html";
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
})
