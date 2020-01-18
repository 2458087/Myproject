//我们的服务
$(function(){
    $(".card-item").each(function(){
        $(this).mousemove(function(){
            $(this).addClass("card-active");
            $(this).siblings().removeClass("card-active");
            $(this).find(".btn").removeClass("btn-outline-blue").addClass("btn-outline-inverse");
            $(this).siblings().find(".btn").removeClass("btn-outline-inverse").addClass("btn-outline-blue");
        });
    });

    //数字滚动
    var numOptions = {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: ''
    }
    var arr = new Array(
            new CountUp("sum-apply", 0, 18397, 0, 2.5, numOptions),
            new CountUp("sum-rate", 0, 98.8, 1, 2.5, numOptions),
            new CountUp("sum-urgent", 0, 3273, 0, 2.5, numOptions),
            new CountUp("urgent-rate", 0, 100, 0, 2.5, numOptions)
    );
    var runNum=function(){
        $(".run-number").each(function(){
            //console.log($(this).index('.item')) //0 1 2
            var index=$(this).index('.run-number')
            arr[index].start()
            //console.log($(this).parent().index()) //0 1 2
        })
        console.log($(".item"))
    }
    runNum()
})
//侧导航栏
$(function(){
    //首先将#back-to-top隐藏
    $("#slider-top").hide();
    //当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).scroll(function(){
        if ($(window).scrollTop()>100){
            $("#slider-top").fadeIn();
        }else{
            $("#slider-top").fadeOut();
        }
    });
    //当点击跳转链接后，回到页面顶部位置
    $("#slider-top").click(function(){
        $('body,html').animate({scrollTop:0},500);
        return false;
    });
    //返回顶部等滑块hover事件
    $('#slider-chat,#slider-qq,#slider-phone,#slider-wechat').hover(
        function(){
            $(this).next().show();
        },
        function(){
            $(this).next().hide();
        }
    );
});
//ins卡片
$(function(){
    var oClose=document.getElementById("pop-close");
    var oPop=document.getElementById("pop-box");
    function timeMo(){
        setTimeout(function(){
            oPop.style.display="block";
        },5000)
    }
    timeMo();
    //点击关闭
    oClose.onclick=function(){
        oPop.style.display="none";
    }

    //固定侧边栏
    
    

});




    
