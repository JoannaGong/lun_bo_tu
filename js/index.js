var index = 0,
    imgWidth = 520,
    timer;

timerFun();

function move( direction ){
    clearTimeout(timer);
    $('.img-box').stop(false, true);
    if( direction == 'prev'){
        index--;
        if( index < 0 ){
            $('.img-box').css({
                left: -2600
            });
            index = 4;
        }
    }else if( direction == 'next'){
        index++;
        if( index > 5 ){
            $('.img-box').css({
                left: 0
            });
            index = 1;
        }
    }
    $('.img-box').animate({
        left: index * -imgWidth
    }, function(){
        timerFun()
    });
    active($('.item').eq(index==5 ? 0:index));
}

function timerFun(){
    timer = setTimeout(function(){
        move('next');
    }, 3000);
}

$('.prevBtn').click(function(){
    move('prev');
})

$('.nextBtn').click(function(){
    move('next');
})

function active( dom ){
    $('.active').removeClass('active');
    dom.addClass('active');
}

$('.item').click(function(){
    index = $(this).index();
    move();
    active($(this));
})