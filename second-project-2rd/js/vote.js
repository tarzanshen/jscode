var c = JSON.parse(localStorage.information);
$(document).ready(function () {
    /*投票页面所有玩家信息*/
    for (i = 0; i < c.length - 1; i++) {
        $(".people-number").eq(i).html(c[i]);
        $(".main-people").eq(i).clone().appendTo("#main");
        $(".people-number-bottom").eq(i + 1).html((i + 2) + "号");
    }
    /*玩家信息下标点击出现 */
    for (let i = 0; i < c.length; i++) {
        $(".main-people").eq(i).click(function () {
            var color = $(".main-icon").eq(i).css("visibility", "visible");
            for (var b = 0; b < c.length; b++) {
                if (b != i || color == "gray") {
                    $(".main-icon").eq(b).css("visibility", "hidden")
                }
            }
        })
    }
    /*遍历玩家信息*/
    killer1 = JSON.parse(localStorage.getItem("killer1"));
    farmer = JSON.parse(localStorage.getItem("farmer"));
    if (farmer == null) {
        farmer = 0;
        killer1 = 0;
        for (a = 0; a < c.length; a++) {
            if (($(".people-number").eq(a).html()) == "杀手") {
                killer1++;
                localStorage.killer1 = JSON.stringify(killer1);
            } else {
                farmer++;
                localStorage.farmer = JSON.stringify(farmer);
            }
        }
    }
    /*投死模块*/
    topVote = false;
    //vote = false;
    vote = JSON.parse(localStorage.getItem("vote"));
    $("#button2").click(function () {
        var topDeathpeopletop = JSON.parse(localStorage.getItem("deathPeopleinfotop"));
        if (topDeathpeopletop == null) {
            var topDeathpeopletop = new Array;
        }
        var topDeathpeopletop2 = JSON.parse(localStorage.getItem("deathPeopleinfotop2"));
        if (topDeathpeopletop2 == null) {
            var topDeathpeopletop2 = new Array;
        }
        var bottomDeathpeople = JSON.parse(localStorage.getItem("deathPeopleinfobottom"));
        if (bottomDeathpeople == null) {
            var bottomDeathpeople = new Array;
        }
        var bottomDeathpeople2 = JSON.parse(localStorage.getItem("deathPeopleinfobottom2"));
        if (bottomDeathpeople2 == null) {
            var bottomDeathpeople2 = new Array;
        }
        /*首次获取数据*/
        people = new Array;
        people2 = new Array;
        deathPeople = new Array;
        k = 0;
        /*判定是否有选中的玩家*/
        for (a = 0; a < c.length; a++) {
            w = $(".main-icon").eq(a).css("visibility");
            if (w == "visible")
                k++;
        }
        if (k > 0) {
            for (let x = 0; x < c.length; x++) {
                var m =  $(".main-icon").eq(x).css("visibility");
                if (m != "hidden") {
                    z = $(".people-number").eq(x).html();
                    console.log(z);
                    /*杀手杀人按钮下不能选择杀手*/
                    if (vote == false && z == "杀手") {
                        alert("不可杀自己");
                        return false;
                    } else {
                        $(".main-icon").eq(x).css("visibility","hidden");
                        $(".people-number").eq(x).css("backgroundColor","gray");
                        $(".people-number-bottom").eq(x).css("backgroundColor","gray");
                        /*投死之后玩家信息变黑*/
                        number1 = $(".people-number").eq(x).html();
                        number2 = $(".people-number-bottom").eq(x).html();
                        deathPeople.push(x);
                        people.push(number1);//玩家信息写入数组
                        people2.push(number2);//玩家编号写入数组
                        localStorage.deathinfo = JSON.stringify(death.concat(deathPeople));
                        /*阵亡玩家下标写入数组*/
                        killer1 = JSON.parse(localStorage.getItem("killer1"));
                        farmer = JSON.parse(localStorage.getItem("farmer"));
                        /*上方遍历玩家信息获取的数据，进入胜利页面条件进行判断*/
                        if (number1 == "杀手") {
                            killer1--;
                            localStorage.killer1 = JSON.stringify(killer1);
                        } else {
                            farmer--;
                            localStorage.farmer = JSON.stringify(farmer);
                        }
                        if (vote == true) {
                            /*头部玩家阵亡信息*/
                            localStorage.deathPeopleinfobottom = JSON.stringify(bottomDeathpeople.concat(people));
                            localStorage.deathPeopleinfobottom2 = JSON.stringify(bottomDeathpeople2.concat(people2));
                        } else {
                            /*底部玩家阵亡信息*/
                            localStorage.deathPeopleinfotop = JSON.stringify(topDeathpeopletop.concat(people));
                            localStorage.deathPeopleinfotop2 = JSON.stringify(topDeathpeopletop2.concat(people2));
                            topVote = true;
                            localStorage.kill = JSON.stringify(topVote);
                        }
                        killer1 = JSON.parse(localStorage.getItem("killer1"));
                        farmer = JSON.parse(localStorage.getItem("farmer"));
                        window.location.href = "proportion4.html";
                        if (killer1 == farmer) {
                            window.location.href = "proportion5.html";//杀手人数等于平民人数
                        }
                        if (killer1 < 1) {
                            window.location.href = "proportion5.html";//杀手全体阵亡

                        }

                    }

                }
            }

        } else {
            alert("选个人");
        }

    })
/*阵亡玩家灰色状态保持*/
var death = JSON.parse(localStorage.getItem("deathinfo"));
if (death == null) {
    death = new Array;
}
if (death != null) {
    for (time = 0; time < death.length; time++) {
        var state = death[time];
        $(".people-number").eq(state).css("backgroundColor","gray");
        $(".people-number-bottom").eq(state).css("backgroundColor","gray");
    }
}
})
