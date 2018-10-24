
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

/*最新动态 超链接文字提示  开始*/
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
/*最新动态 超链接文字提示 结束*/

/*品牌活动品牌活动模块横向滚动 开始*/
$(function () {
    $('.brand-tab li a').click(function () {
        $(this).parent().addClass('b-chos').siblings().removeClass('b-chos');
        var idx=$('.brand-tab li a').index(this);
        brandList(idx);
        return false;
    })
});

function brandList(index) {
    var $rollobj=$('.brand-list');
    var rollWidth = $rollobj.find("li").outerWidth();
    rollWidth = rollWidth * 4; //一个版面的宽度
    $rollobj.stop(true,false).animate({ left : -rollWidth*index},1000); // 需要定位
}
/*品牌活动活动品牌活动模块横向滚动 结束*/