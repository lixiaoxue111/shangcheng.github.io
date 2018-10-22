
/* 换肤开始*/
$('.skin li').on('click',function () {
    $(this).addClass('select').siblings().removeClass('select');
    $('.nav').attr('class','nav skin'+$(this).index());
});
/* 换肤结束*/
/* slide start */
var count=0;
var timer;
function change(idx) {
    $('.btn-box a').eq(idx).addClass('chos').siblings().removeClass('chos');
    $('.img-box img').eq(idx).stop().fadeIn(600).siblings().stop().fadeOut(600);
}
function run() {
    timer=setInterval(function () {
        count++;
        if (count>=$('.img-box img').length){
            count=0;
        }
        change(count);
    },2000)
}
run();
$('.btn-box a').on('mouseover',function () {
    change($(this).index());
    count=$(this).index();
});
$('.slide').on('mouseover',function () {
    clearInterval(timer);
}).on('mouseout',function () {
    run();
});

/* slide end */

/*最新动态开始*/
var $title = '';

$('.notice-info li a').on('mouseover',function(e){
    //$title = $(this).attr('title');
    this.myTitle = $(this).attr('title');
    $('<div class="tip">'+this.myTitle+'</div>').appendTo('body').offset({
        left:e.pageX +20,
        top:e.pageY+20,
    });
    $(this).attr('title','');
}).on('mousemove',function(e){
    $('.tip').offset({
        left:e.pageX +20,
        top:e.pageY+20
    });
}).on('mouseout',function(){
    $('.tip').remove();
    //$(this).attr('title',$title);
    $(this).attr('title',this.myTitle);

});

/*最新动态结束*/
