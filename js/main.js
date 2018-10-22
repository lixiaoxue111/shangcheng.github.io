
/* 换肤开始*/
$('.skin li').on('click',function () {
    $(this).addClass('select').siblings().removeClass('select');
    $('.nav').attr('class','nav skin'+$(this).index());
});
/* 换肤结束*/
/* hot开始*/
$(function () {
    $('.cata-info .promoted').append('<s class="hot"></s>')
});
/* hot结束*/
/* 轮播图开始 */
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

/* 轮播图结束 */

/*最新动态开始*/
$(function(){
    var x = 20;
    var y = 20;
    $("a.tooltip").mouseover(function(e){
        this.myTitle = this.title;
        this.title = "";
        var tooltip = "<div id='tooltip'>"+ this.myTitle +"</div>"; //创建 div 元素
        $("body").append(tooltip);	//把它追加到文档中
        $("#tooltip")
            .css({
                "top": (e.pageY+y) + "px",
                "left": (e.pageX+x)  + "px"
            }).show("fast");	  //设置x坐标和y坐标，并且显示
    }).mouseout(function(){
        this.title = this.myTitle;
        $("#tooltip").remove();   //移除
    }).mousemove(function(e){
        $("#tooltip")
            .css({
                "top": (e.pageY+y) + "px",
                "left": (e.pageX+x)  + "px"
            });
    });
});
/*最新动态结束*/
