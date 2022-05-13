$(function(){

    //메인 비디오
    $('.mainWrap .main .pause').click(function(){
        $('.videoBox video').get(0).pause();
        $(this).css({'display' : 'none'});
        $('.mainWrap .main .play').css({'display' : 'block'});
    });

    $('.mainWrap .main .play').click(function(){
        $('.videoBox video').get(0).play();
        $(this).css({'display' : 'none'});
        $('.mainWrap .main .pause').css({'display':'block'});
    });


    // 스크롤
    $(window).scroll(function(){
        var wd = $(window).width();
        if(wd > 1024){

        var now = $(this).scrollTop();
        console.log(now);
        if(now >= 100 && now <= 200){
            $('div.content>div.header').addClass('scroll');
        }else if(now >= 200 && now <= 800){
            $('div.content>div.section').addClass('scroll');
        }else if(now >= 800 && now <= 1400){
            $('div.bnrWrap').addClass('scroll');
        }else{
            $('div.ftrWrap').addClass('scroll');
            
        };
    };
        
    });

    // 탑버튼
    $('.topBtn').click(function(){
        $('html,body').stop().animate({scrollTop : 0}, 500)
    });

});