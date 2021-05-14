new ScrollHint('.jsScrollable', {
    scrollHintIconAppendClass: 'scroll-hint-icon-black', // white-icon will appear
    applyToParents: true,
    i18n: {
      scrollable: 'スクロールできます'
    }
});

//mainvisual
var sld = '.sld', //スライドにclass付与
sldPre = 'sld', //スライドのidにナンバリングして付与
sldTime = 2000, //fadein / outの時間
sldWait = 5000; //スライド切り替え時間

$(window).on('load', function () {  
//最初のスライドを直ちに表示
var sldNum = 1;
$(sld).hide();
$('#sld1').fadeIn(sldTime);
$('#sld1').addClass('zoomImg');

//スライド切り替え時間を設定して繰り返し
//cssで.zoomImg作成
setInterval(() => {
    $(sld).not(`#${sldPre}${sldNum}`).fadeOut(sldTime);
    $(`#${sldPre}${sldNum}`).removeClass('zoomImg');
    $(`#${sldPre}${sldNum}`).fadeIn(sldTime);
    $(`#${sldPre}${sldNum}`).addClass('zoomImg');

    sldNum++;
    if (sldNum > $(sld).length) {
        sldNum = 1;
    }
}, sldWait);
});

//header_nav_sp操作
const headerNav = $('.header_nav_sp'),
    navSlider = $('.header_nav_sp_slider'),
    navToggle = $('.header_nav_sp_toggle');

navToggle.on('click', event => {
    if ($(event.currentTarget).hasClass('header_nav_sp_toggle-active')) {
        navToggle.removeClass('header_nav_sp_toggle-active');
        navSlider.removeClass('header_nav_sp_slider-active');
    } else {
        navToggle.addClass('header_nav_sp_toggle-active');
        navSlider.addClass('header_nav_sp_slider-active');
    }
});


//totop操作
const totop = $('.totop');
////クリック時の操作
totop.on('click', () => {
    $('html,body').animate({
        'scrollTop': 0
    }, 1000);
});
////ページ上部では隠す
totop.hide();
$(window).on('scroll', event => {
    if ($(event.currentTarget).scrollTop() > 100) {
        totop.fadeIn();
    } else {
        totop.fadeOut();
    }
});


//ナビゲーション操作
const navBtn = $('.jsNavBtn');
var topMargin

$(window).on('load resize', event=> {
    if ($(event.currentTarget).width() < 992) {
        topMargin = 60;
    } else {
        topMargin = 80;
    };
});

navBtn.on('click', event => {
    thisId = $(event.currentTarget).attr('href');
    position = $(thisId).offset().top;
    $('html, body').animate({
        'scrollTop': position - topMargin
    }, 1000);
    setTimeout(function(){
        navToggle.removeClass('header_nav_sp_-active');
        navSlider.removeClass('header_nav_sp_slider-active');
    }, 1000);
});

