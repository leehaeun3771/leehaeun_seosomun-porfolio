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

    
    // 아트탑
    var i = 0;
    var button = $('.btns.i1>i');
    var thumb = $('.thumbnail.i1');
    var thumbTop = $('.artTop .thumbView');
    var mo = 0;

    $('div.artTop>ul.bar>li').eq(0).addClass('on');
    button.first().click(function(){
        i--;
        if(i<=0){
            i=0;
        };
        thumb.animate({
            marginLeft : i*-100+'%'
        },800);
        $('div.artTop>ul.bar>li').removeClass('on');
        $('div.artTop>ul.bar>li').eq(i).addClass('on');
    });

    button.last().click(function(){
        i++;
        if(i>=2){
            i=2;
        };
        thumb.animate({
            marginLeft : i*-100+'%'
        },800);
        $('div.artTop>ul.bar>li').removeClass('on');
        $('div.artTop>ul.bar>li').eq(i).addClass('on');   
    });
 

    $('div.artTop>ul.bar>li').click(function(){
        var ind1 = $(this).index();
        thumb.css('marginLeft', ind1 *-100 + '%');
        i=ind1;
        $('div.artTop>ul.bar>li').removeClass('on');
        $('div.artTop>ul.bar>li').eq(i).addClass('on');
    });


    //모바일 swipe 아트탑
    thumbTop.find('.thumbnail.i1').swiperight(function(){
        mo--;
        if(mo<=0){
            mo=0;
        };
        thumb.animate({
            marginLeft : mo*-100+'%'
        },800);
        $('div.artTop>ul.bar>li').removeClass('on');
        $('div.artTop>ul.bar>li').eq(mo).addClass('on');
    });

    thumbTop.find('.thumbnail.i1').swipeleft(function(){
        mo++;
        if(mo>=2){
            mo=2;
        };
        thumb.animate({
            marginLeft : mo*-100+'%'
        },800);
        $('div.artTop>ul.bar>li').removeClass('on');
        $('div.artTop>ul.bar>li').eq(mo).addClass('on');   
    });
 



    // 아트미드
    var j = 0;
    var button2 = $('.btns.i2>i');
    var thumb2 = $('.thumbnail.i2');
    var thumbMid = $('.artMid .thumbView');


    $('div.artMid>ul.bar>li').eq(0).addClass('on2');
    button2.first().click(function(){
        j--;
        if(j<=0){
            j=0;
        };
        thumb2.animate({
            marginLeft : j*-100+'%'
        },800);
        $('div.artMid>ul.bar>li').removeClass('on2');
        $('div.artMid>ul.bar>li').eq(j).addClass('on2');
    });

    button2.last().click(function(){
        j++;
        if(j>=2){
            j=2;
        };
        thumb2.animate({
            marginLeft : j*-100+'%'
        },800);
        $('div.artMid>ul.bar>li').removeClass('on2');
        $('div.artMid>ul.bar>li').eq(j).addClass('on2');   
    });


    $('div.artMid>ul.bar>li').click(function(){
        var ind2 = $(this).index();
        thumb2.css('marginLeft', ind2 *-100 + '%');
        j=ind2;
        $('div.artMid>ul.bar>li').removeClass('on2');
        $('div.artMid>ul.bar>li').eq(j).addClass('on2');
    });


     //모바일 swipe 아트미드
     thumbMid.find('.thumbnail.i2').swiperight(function(){
        mo--;
        if(mo<=0){
            mo=0;
        };
        thumb2.animate({
            marginLeft : mo*-100+'%'
        },800);
        $('div.artMid>ul.bar>li').removeClass('on2');
        $('div.artMid>ul.bar>li').eq(mo).addClass('on2');
    });

    thumbMid.find('.thumbnail.i2').swipeleft(function(){
        mo++;
        if(mo>=2){
            mo=2;
        };
        thumb2.animate({
            marginLeft : mo*-100+'%'
        },800);
        $('div.artMid>ul.bar>li').removeClass('on2');
        $('div.artMid>ul.bar>li').eq(mo).addClass('on2');   
    });




    // 아트바텀

    var k = 0;
    var button3 = $('.btns.i3>i');
    var thumb3 = $('.thumbnail.i3');
    var thumbBtm = $('.artBtm .thumbView');

    $('div.artBtm>ul.bar>li').eq(0).addClass('on3');
    button3.first().click(function(){
        k--;
        if(k<=0){
            k=0;
        };
        thumb3.animate({
            marginLeft : k*-100+'%'
        },800);
        $('div.artBtm>ul.bar>li').removeClass('on3');
        $('div.artBtm>ul.bar>li').eq(k).addClass('on3');
    });

    button3.last().click(function(){
        k++;
        if(k>=1){
            k=1;
        };
        thumb3.animate({
            marginLeft : k*-100+'%'
        },800);
        $('div.artBtm>ul.bar>li').removeClass('on3');
        $('div.artBtm>ul.bar>li').eq(k).addClass('on3');   
    });


    $('div.artBtm>ul.bar>li').click(function(){
        var ind3 = $(this).index();
        thumb3.css('marginLeft', ind3 *-100 + '%');
        k=ind3;
        $('div.artBtm>ul.bar>li').removeClass('on3');
        $('div.artBtm>ul.bar>li').eq(k).addClass('on3');
    });


     //모바일 swipe 아트바텀
     thumbBtm.find('.thumbnail.i3').swiperight(function(){
        mo--;
        if(mo<=0){
            mo=0;
        };
        thumb3.animate({
            marginLeft : mo*-100+'%'
        },800);
        $('div.artBtm>ul.bar>li').removeClass('on3');
        $('div.artBtm>ul.bar>li').eq(mo).addClass('on3');
    });

    thumbBtm.find('.thumbnail.i3').swipeleft(function(){
        mo++;
        if(mo>=1){
            mo=1;
        };
        thumb3.animate({
            marginLeft : mo*-100+'%'
        },800);
        $('div.artBtm>ul.bar>li').removeClass('on3');
        $('div.artBtm>ul.bar>li').eq(mo).addClass('on3');   
    });



    // 스크롤
    $(window).scroll(function(){
        var wd = $(window).width();
        if(wd > 1024){

        var now = $(this).scrollTop();
        console.log(now);
        if(now >= 100 && now <= 550){
            $('div.content>div.header').addClass('scroll');
        }else if(now >= 550 && now <= 1300){
            $('div.content>div.section>div.artTop').addClass('scroll');
        }else if(now >= 1300 && now <= 2100){
            $('div.content>div.section>div.artMid').addClass('scroll');
        }else if(now >= 2100 && now <= 2800){
            $('div.content>div.section>div.artBtm').addClass('scroll');
        }else if(now >= 2800 && now <= 3200){
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