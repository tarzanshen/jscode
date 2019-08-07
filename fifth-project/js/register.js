$("document").ready(function(){
$("#submit-b").click(function(){
    // var register=new XMLHttpRequest();
     var user=$("#user").val();
     var password=$("#password").val();
    // vardata="name="+user+"$pwd"+password;
    $.ajax({
        type:"POST",
        url:"/carrots-admin-ajax/a/login",
        data:{name:user,pwd:password},
        dataType:"json",
        success:function(data){
            if(data.code===0){
                window.location.href="http://dev.admin.carrots.ptteng.com/";
            }else{
                document.getElementById("information").innerHTML=data.message;
            }
        }
    })
})

})

// document.getElementById("submit-b").onclick=function(){
//     var register=new XMLHttpRequest();
//     var user=document.getElementById("user").value;
//     var password=document.getElementById("password").value;
//     var data="name=" + user + "&pwd=" + password;//文本框值

//     // var data={
//     //     name:user,
//     //     pwd:password
//     // }
//     register.onreadystatechange = function(){
//         if(register.readyState==4 && register.status==200){
//             console.log(data)
//             var datainfo=JSON.parse(register.responseText);
//             console.log(datainfo.code)
//             if(datainfo.code===0){
//                 window.location.href="http://dev.admin.carrots.ptteng.com/";
//             }else{
//                 console.log(datainfo.message);
//                 document.getElementById("information").innerHTML=datainfo.message;
//             }
//         }
//     }


//     register.open('post','/carrots-admin-ajax/a/login',true);
//     register.setRequestHeader('content-type','application/x-www-form-urlencoded');
//     register.send(data);

// }