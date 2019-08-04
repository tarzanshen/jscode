$.fn.RangeSlider = function (cfg) {
    this.sliderCfg = {
        min: cfg.min,
        max:cfg.max,
        step: cfg.step,
    };
    var $input = $(this);
    $input.css('background-size', 28 + '% 100%');
    $input.bind("input", function () {
        $input.attr('value', this.value);
        $input.css('background-size', (this.value - 4) * 7 + '% 100%');      
    });
};

function change1() {
    x = $("#people-number").val();
    if (x >= 4 && x <= 18) { //input杀手平民值
        $("#killer").val(Math.floor(x / 4));
        w = $("#killer").val();
        $("#people").val(x - w);
    } else {
        $("#killer").val("");
        $("#people").val("");
    }

}

$("#scroll").bind('input propertychange', function () {
    s = $("#scroll").val();
    $("#people-number").val(s);
    change1();
})

$("#people-number").keydown(function () {
    var e = event.keyCode;
    if (e <= 57 || e >= 96 && e <= 105) {
        return true;
    } else {
        return false;
    }
})

$("#people-number").bind('input propertychange', function () {
    change1();
    $("#scroll").val($("#people-number").val());
    if($("#people-number").val()<4 || $("#people-number").val()>18){
        $("#scroll").val(0);
        $("#scroll").css('background-size', 0);
        return false;
    }
    $("#scroll").css('background-size', (this.value - 4) * 7 + '% 100%');
    
})
$(".leftb").on("click", function () { //减号按钮
    z = $("#scroll").val();
    z--;
    if (z < 4 || z > 18) {
        alert("请输入规定人数")
    } else {
        $("#scroll").val(z);
        $("#people-number").val(z);
        $("#scroll").css('background-size', (z - 4) * 7 + '% 100%');
        change1();
    }
})
$(".rightb").click(function () { //加号按钮
    a = $("#scroll").val();
    a++;
    if (a < 4 || a > 18) {
        alert("请输入规定人数")
    } else {
        $("#scroll").val(a);
        $("#people-number").val(a);
        $("#scroll").css('background-size', (a - 4) * 7 + '% 100%');
        change1();
    }
})

$("#button").click(function () { //input范围
    var v = $("#people-number").val();
    if (isNaN(v) || v < 4 || v > 18) {
        alert("请输入规定人数");
        return false;
    }
    allPeople = new Array;
    for (var i = 0; i < parseInt($("#killer").val()); i++) {
        allPeople.push("杀手");
    }

    for (var c = 0; c < parseInt($("#people").val()); c++) {
        allPeople.push("平民");
    }
    theNewArray = allPeople;
    for (var d = theNewArray.length; d--;) {
        var j = Math.floor(Math.random() * (d + 1));
        var temp = theNewArray[j];
        theNewArray[j] = theNewArray[d];
        theNewArray[d] = temp;
    }
    localStorage.information = JSON.stringify(theNewArray);
    window.location.href = "proportion2.html";
    console.log(allPeople);
})
$(".header-square").click(function(){
    window.location.href="eleventh3.html";
})