$(function(){
    $('.hdr').load('./inc/header.html', function(){
        
         // 햄버거탑
    $('div.header>ul.nav>li').eq(5).click(function(){
        $('div.topBox').animate({
            height : '400px'
        },500);
        $(this).css({display : 'none'});
        $('div.header>ul.nav>li').eq(6).css({display : 'block'})        
    });
    $('div.header>ul.nav>li').eq(6).click(function(){
        $('div.topBox').animate({
            height : '0px'
        },500);
        $(this).css({display : 'none'});
        $('div.header>ul.nav>li').eq(5).css({display : 'block'})        
    });



    });
    $('.footer').load('./inc/footer.html');
});