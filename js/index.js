// $(window).scrollTop(0);

function init_text() {
    let typ = '양주열, \n 포트폴리오 \n 에 오신걸 환영합니다.';
    let text = $('.Home .main_text .text');

    let i = 0;
    let typ_text = '';
    let txt = '';

    function typing() {
        // i 번호가 typ 텍스츠 글자 수를 넘으면
        if (i >= typ.length) 
        {
            setTimeout(function () {
                text.html(''); // 글씨 없애기
                txt = '';
                typ_text = '';
                i = 0; // i 번호 0으로 초기화

                set_typ = setInterval(typing, 100);
            }, 5000);

            clearInterval(set_typ);
        }
        else 
        {
            // txt에 다음 글자 넣기
            txt = typ[i++];

            // txt에 글자가 무엇인지 확인후
            if (txt === '\n') 
            {
                // typ_text에 글자 내리기
                typ_text += '<br/>';
            } 
            else 
            {
                // typ_text에 글자 추가
                typ_text += txt;
            }

            // text div에 글자 넣기
            text.html(typ_text);
        }
    }

    // // 시간 흐름에 따라 글자 넣기
    let set_typ = setInterval(typing, 50) // 타이핑 시작
}

init_text();


function text_drow() {
    let typ = '즐거운';
    let click_text = $('.home_text .text_title2 .text_title2_2').text();
    let text = $('.home_text .text_title2 .text_title2_2');

    let i = click_text.length;
    let typ_text = '';
    let txt = '';
    let del = -1;

    function text_clear() {
        // i 번호가 typ 텍스츠 글자 수를 넘으면
        if (i <= 0) 
        {
            clearInterval(set_text);
            i = 0
            typ_text = '';
            txt = '';
            del = -1;

            function text_drow() {
                // i 번호가 typ 텍스츠 글자 수를 넘으면
                if (i >= typ.length) 
                {
                    clearInterval(set_text2);

                    return false;
                } 
                else 
                {
                    txt = typ[i++];

                    // typ_text에 글자 추가
                    typ_text += txt;

                    // text div에 글자 넣기
                    text.html(typ_text);
                }
            }

            let set_text2 = setInterval(text_drow, 300) 

            return false;
        } 
        else 
        {
            // txt에 slice로 글씨 자르기
            txt = click_text.slice(0, del);
            del--;
            i--;

            // text div에 글자 넣기
            text.html(txt);
        }
    }

    // 시간 흐름에 따라 글자 넣기
    let set_text = setInterval(text_clear, 100) // 타이핑 시작
}

$('.text_title2_2').on('click', function () {
    text_drow();
})

$(window).on('scroll', function () {
    sct = Math.ceil($(this).scrollTop());
    
    if (sct <= 0) 
    {
        $('.header').removeClass('on');
    } 
    else 
    {
        $('.header').addClass('on');
    }
})

setInterval(function () {
	$('.Home .home_text .text_title2 .text_title2_2 span').animate({
        opacity: 0
    } ,500 , function () {
		$('.Home .home_text .text_title2 .text_title2_2 span').animate({
            opacity: 0.5
        }, 500);
	});
}, 1000);


$('.About_me .adress div').on('mouseover mouseout', function () {
    $(this).toggleClass('on');
 })

var sDist0 = Math.ceil($('.Home').offset().top);
var sDist1 = Math.ceil($('.About_me').offset().top);
var sDist2 = Math.ceil($('.skill').offset().top);
var lastSect = Math.ceil($('.Web_site').offset().top);

$(window).resize(function(){ 
    sDist0 = Math.ceil($('.Home').offset().top);
    sDist1 = Math.ceil($('.About_me').offset().top);
    sDist2 = Math.ceil($('.skill').offset().top);
    lastSect = Math.ceil($('.Web_site').offset().top);
});

var sct = 0;
$(window).on('scroll', function () {
    sct = Math.ceil($(this).scrollTop()) + 100;
    
    if (sct >= sDist0 && sct < sDist1) 
    {
        $('.back_color').css({
            background: '#fff'
        })
        $('.header .nav ul li').eq(0).addClass('on').siblings().removeClass('on');
    } 
    else if (sct >= sDist1 && sct < sDist2 ) 
    {
        $('.back_color').css({
            background: '#fff'
        })
        $('.header .nav ul li').eq(1).addClass('on').siblings().removeClass('on');
    } 
    else if (sct >= sDist2 && sct < lastSect) 
    {
        $('.back_color').css({
            background: '#222831'
        })
        $('.header .nav ul li').eq(2).addClass('on').siblings().removeClass('on');
    } 
    else if (sct >= lastSect) 
    {
        $('.back_color').css({
            background: '#fff'
        })
        $('.header .nav ul li').eq(3).addClass('on').siblings().removeClass('on');
    }
})

$('.section').on('mousewheel', function (event, delta) 
{
    if (delta > 0) { // 마우스휠을 위로 굴리면 양수
        $('html, body').stop().animate({
            scrollTop: $(this).prev().offset().top
        }, 600)
    } 
    else if (delta < 0) { // 마우스휠을 아래로 굴리면 음수
        $('html, body').stop().animate({
            scrollTop: $(this).next().offset().top
        }, 600)
    }
})

$('.header .nav ul li a').on('click', function () {
    $(this).parent().addClass('on').siblings().removeClass('on');

    return false;
})

$('.header .nav ul li').eq(0).addClass('on')

var cflag = false;

$('.header .nav ul li a').on('click', function (e) {
    e.preventDefault()
    cflag = true;
    $(this).parent().addClass('on')
    $(this).parent().siblings().removeClass('on')
    var num = $(this).parent().index()

    
    var secDist = $('.section').eq(num).offset().top

   
    $('html, body').stop().animate({
        scrollTop: secDist
    }, 500, function () {
        cflag = false
    })
})

$('.skill .skills .skill_title').on('click', function () {

    if($(this).parent().hasClass('Frontend'))
    {
        $(this).next().find('*').toggleClass('on');
    }
    else 
    {
        $(this).siblings().toggleClass('on');
    }

    check($(this))
 })

var check1 = false; 
var check2 = false; 
var check3 = false; 

var arrPercent1 = [90, 80, 70, 60, 50]
var arrChartColor1 = ['#e8670c', '#ff9e5a', '#ff710d', '#7f4f2d', '#cc5b0b', '#cc3a1a'];
var arrPercent2 = [50, 60, 70, 80, 90]
var arrChartColor2 = ['#ffdddd', '#ddffe5', '#ddeeff', '#ddffdd', '#f6ddff', '#e5ddff'];
var arrPercent3 = [70, 100, 60, 80, 30]
var arrChartColor3 = ['#f2e2c6', '#fbdea2', '#a3abe0', '#d2bce1', '#b4585a', '#76aa22'];
var arrPercent_end = [0, 0, 0, 0, 0]

 function check(name)
 {
     if($(name).parent().hasClass('Frontend'))
     {
         if(!check1)
         {
            easyPieChart_drow('.Frontend .in_text2',arrPercent1, arrChartColor1);
            check1 = true;
         }
         else
         {
            $('.Frontend .in_text2').each(function(idx){
                $(this).attr({'data-percent' : 0})
            })
            check1 = false;
         }
     }
     else if($(name).parent().hasClass('Backend'))
     {
        if(!check2)
        {
            easyPieChart_drow('.Backend .in_text2', arrPercent2, arrChartColor2);
            check2 = true;
        }
        else
        {
           $('.Backend .in_text2').each(function(){
               $(this).attr({ 'data-percent': 0})
           })
           check2 = false;
        }
     }
     else if($(name).parent().hasClass('end'))
     {
        if(!check3)
        {
            easyPieChart_drow('.end .in_text2', arrPercent3, arrChartColor3);
            check3 = true;
        }
        else
        {
           $('.end .in_text2').each(function(){
               $(this).attr({ 'data-percent': 0})
           })
           check3 = false;
        }
     }
 }

function easyPieChart_drow(name, arrPercent, arrChartColor)
{
    $(name).each(function (idx) {
        $(this).attr({
            'data-percent': arrPercent[idx]
        })

        $(this).easyPieChart({
            animate: 3000, // 진행시간
            easing: 'easeOutBounce', // 속도함수
            barColor: arrChartColor[idx], // 채워지는 색상
            trackColor: '#efefef', // 트색 색상
            scaleColor: false, // 눈금선 색상
            lineCap: 'round', // 선의 끝 모양(butt, round, square)
            lineWidth: 10, // 선의 폭
            size: 75, // 원형차트의 크기
            onStart: $.noop,
            onStop: $.noop,
            onStep: function (from, to, percent) {
                $(this.el).find('.percent').text(Math.round(percent));
            }
        })
    })
}

// $(window).on('load', function(){
//     $('.Web_site ul').isotope({
//         filter: '*',
//         layoutMode:'masonry', // fitRows, masonry
//         itemSelecter:'.item',
//     })
// })

// $('.category a').on('click', function(){
//     var filterValue = $(this).attr('href');
    
//     $('.Web_site ul').isotope({
//         filter: filterValue,
//         layoutMode:'masonry', // 옵션 : fitRows, masonry
//         itemSelecter:'.item',
//     })

//     return false;
// })

$('.sliedInner').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,

    prevArrow: '<button class="slick-arrow slick-prev"><i class="fas fa-angle-left"></i></button>',

    nextArrow: '<button class="slick-arrow slick-next"><i class="fas fa-angle-right"></i></button>',
  });

  $('.slideOuter .slick-slide').on('mouseover mouseout', function () {
    $(this).toggleClass('on');
 })