
function myFunction() {
    
    const selector = document.querySelector('.welcome')
    selector.classList.add('magictime', 'puffIn')
    const selector2 = document.querySelector('#xiaoren')
    selector2.classList.add('magictime', 'puffIn')
    const selector3 = 
    document.querySelector('.logo')
    selector3.classList.add('magictime','puffIn')
}
setTimeout(myFunction, 0);
function card0out(){
    $("#card0").show()
     const selector = document.querySelector('#card0')
    selector.classList.add('magictime', 'openUpLeftReturn')
}
setTimeout(card0out,1000);

function card0say(){
    
    
}
setTimeout(card0say,3000);

$(function () {
    //图按跟着鼠标短程平移的效果  
   // 当鼠标指针在指定的元素中移动时，就会发生 mousemove 事件。
    $(document).mousemove(function(e)  
    {
        //获取图片所在的位置，使用css设置相对位置（ "position": "absolute"），也可以直接元素最初位置x、y
        //鼠标相对于文档的左边缘的位置（"left": e.pageX ）为整型
        //鼠标相对于文档的左边缘的位置（ "top": e.pageY ）
        var x=2;    
        var y=100;
        //JQ语法，其中的30与31为坐标的比例公式，统一用以下30、31参数比较整齐。
        $(".welcome").css({ "position": "absolute", "left": (e.pageX+30*x)/31 , "top": (e.pageY+30*y)/31});
        /*var lx=10;
        var ly=10;*/
       /* $(".logo").css({"position":"absolute","left":(e.pageX+30*lx)/31,"top": (e.pageY+30*ly)/31}); */
    });  
});


