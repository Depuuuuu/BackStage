window.onload = function () {
    // var video = document.querySelector("video");
    $("#card0").hide();
    var icon = document.querySelector(".icon");
    var img = document.querySelector(".guocheng img");
    var div = document.querySelectorAll("#click");
    var clicktimes = 0;
    div[clicktimes].style.display = "block";
    clickedf = function (e) {
        // content.innerHTML = p[clicktimes].innerHTML;
        div[clicktimes].style.display = "none";
        clicktimes += 1;
        div[clicktimes].style.display = "block";
        if (clicktimes == 6) {
            img.src = "第一轮.png";
        }
        else if (clicktimes == 9) {
            img.src = "第二轮.png";
        }
        else if (clicktimes == 11) {
            img.src = "第三轮.png";
        }
        else if (clicktimes == 13) {
            img.src = "第四轮.png";
        }
        console.log(clicktimes);
        if (clicktimes == div.length - 1) {
        }
    }
    icon.addEventListener("click", clickedf, false);
}


function ShowLoginText(){
    layer.open({
        type:1,
        title:"登录",
        area:["395px","300px"],
        content:$("#loginBox"),
        });
    }
function Login(){
    var username=$.trim($("#InputUsername").val());//获取用户名trim是去掉空格
    var password=$.trim($("#InputUserPwd").val());//获取密码
    if(username==""||password==""){
        layer.alert("用户名或者密码不能为空!",{
        title:"提示",
        icon:5, 
        });
    }
}
