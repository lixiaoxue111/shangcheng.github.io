
/* 换肤开始*/
$('.skin li').on('click',function () {
    $(this).addClass('select').siblings().removeClass('select');
    $('.nav').attr('class','nav skin'+$(this).index());
    setCookie('skin',$(this).index(),0);
});
var index=getCookie('skin');
$('.skin li').eq(index).trigger('click');
/* 换肤结束*/
/*导航效果 开始*/
$(function () {
    $('.nav li').hover(function () {
        $(this).find('.jnNav').show();
    },function () {
        $(this).find('.jnNav').hide();
    })
});
/*导航效果 结束*/
/* hot开始*/
$(function () {
    $('.cata-info .promoted').append('<s class="hot"></s>')
});
/* hot结束*/