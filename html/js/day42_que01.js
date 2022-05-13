$(function(){
    // 문제1
    var i = 0;
    $('.que1>button').eq(0).click(function(){
        i++;
        if(i > 4){
        i = 4;
    };
        $('.artGroup').css('marginLeft', i * -100 + '%')
    });

    $('.que1>button').eq(1).click(function(){
        i--;
        if(i < 0){
        i = 0;
    };
        $('.artGroup').css('marginLeft', i * -100 + '%')
    });

    // 문제2
    $('ul>li').eq(0).addClass('show');
    $('ul>li').click(function(){
        $('ul>li').removeClass('show');
        $(this).addClass('show');
        var ind = $(this).index();
        $('.artGroup2').css('margin-top', ind * -500 + 'px');
        i = ind;

    });            
    
    $('.que2>button').eq(0).click(function(){
        i++;
        if(i > 4){
            i = 4;
        };
        $('.artGroup2').css('margin-top', i * -500 + 'px');
        $('ul>li').removeClass('show');
        $('ul>li').eq(i).addClass('show');
    });

    $('.que2>button').eq(1).click(function(){
        i--;
        if(i < 0){
            i = 0;
        };
        $('.artGroup2').css('margin-top', i * -500 + 'px');
        $('ul>li').removeClass('show');
        $('ul>li').eq(i).addClass('show');
    });

    // 문제3
    $('.article3').click(function(){
        $('.thumbView').css('background-image', $(this).css('background-image'));
    });


    // 문제4
    $('.article4').click(function(){
        var indd = $(this).index();
        $('.thumbGroup').css('margin-left', indd * -100 + '%');
    });

});