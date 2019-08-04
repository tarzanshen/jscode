var c = JSON.parse(localStorage.information);
$(document).ready(function () {
    for (i = 0; i < c.length - 1; i++) {
        $(".people-number").eq(i).html(c[i]);
        $(".main-people").eq(i).clone().appendTo("#main");
        //document.getElementById("main").appendChild(clone1);
        $("people-number").eq(i + 1).html(c[i + 1]);
        $(".people-number-bottom").eq(i + 1).html((i + 2) + "号");
    }
    $("#button3").click(function () {
        window.location.href = "proportion4.html";
    })
    var death = JSON.parse(localStorage.getItem("deathinfo"));
    if (death == null) {
        death = new Array;
    }
    console.log(death);
    if (death != null) {
        for (time = 0; time < death.length; time++) {
            var state = death[time];
            $(".people-number").eq(state).css("backgroundColor", "gray");
            $(".people-number-bottom").eq(state).css("backgroundColor", "gray");
        }
    }
})
