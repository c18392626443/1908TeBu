$(".nav a").mousemove(function(){
    $(this).css({color:"#c81623"});
}).mouseout(function(){
    $(this).css({color:"#000000"});
});
$(".nav a").eq(4).mousemove(function(){
    $(".boxs").show();
}).mouseout(function(){
    $(".boxs").hide();
});
function xiglunbo(){
    let index = 0;
    let logoms = document.getElementById("logom");
    setInterval(function(){
        index++;
        logoms.style.background = "url(img/logoms"+index+".jpg)";
        if(index > 1){
            index = 0;
            logoms.style.background = "url(img/logoms"+index+".jpg)";
        }
    },2000);
}
$(function(){
    xiglunbo();
});