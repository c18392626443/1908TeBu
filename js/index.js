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

// banner
let index = 0;
    $(".num li").click(function () {
            $(this).css({background:"red"}).siblings().css({background:"black"});
            index=$(this).index();
            $(".img li").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    });
    var time=setInterval(move,2000);
    function move() {
        index++;
        if (index==4){
            index=0
        }
        $(".num li").eq(index).css({background:"red"}).siblings().css({background:"black"});
        $(".img li").eq(index).stop().fadeIn(500).siblings().stop().fadeOut(500);
    };
    $(".banner").hover(function () {
        clearInterval(time);
    },
    function () {
        time=setInterval(move,2000);
    });
    //反向轮播
    // function moveL() {
    //      index--;
    //     if (index==-1){
    //         index=3
    //     }
    //     $(".num li").eq(index).css({background:"red"}).siblings().css({background:"black"});
    //     $(".img li").eq(index).stop().fadeIn(1000).siblings().stop().fadeOut(1000);
    // }

    // cnotent
    function cnon(){
        let sum = 1;
        let oul = document.getElementById("ouls");
        let time=setInterval(function(){
            // clearInterval(time);
            sum++;
            oul.style.left = "-"+sum+"px";
            let str = oul.offsetLeft;
            
            if(str == -1000){
                oul.style.left = "0px";
                clearInterval(time);
                cnon();
            }
            // $(".oUl").hover(
            //     function(){
            //     clearInterval(time);
            // },
            //     function(){
                  
            //     }
            // )
        },30);   
    }
   
    $(function(){
        cnon();
    });
$(".lomg").hover(function(){
    $("#imgone").fadeIn(1000);
},function(){
    $("#imgone").css({display:"none"});
});
$(".lomg1").hover(function(){
    $("#imgone1").fadeIn(1000);
},function(){
    $("#imgone1").css({display:"none"});
});
$(".seles-rigth1").hover(function(){
    $("#imgone2").fadeIn(1000);
},function(){
    $("#imgone2").css({display:"none"});
});
$(".seles-rigth2").hover(function(){
    $("#imgone3").fadeIn(1000);
},function(){
    $("#imgone3").css({display:"none"});
});

// 右侧固定导航
// $(".rigth-max").hover(function(){
//     $(".rigthNav2").css({display:"block",transform:"scaleX(5)",transition:"all 5s"});
// })

// 回到顶部
$("#Top").click(function(){
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  });

        

