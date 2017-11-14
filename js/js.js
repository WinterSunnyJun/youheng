$(function () {
//    返回顶部
    $('#back-top').on("click",function () {
        $(document.body).animate({scrollTop:0},800);
    })

//    banner
    $('#banner-list').bxSlider();

//    在线留言之相关推荐
    var zxNow = 0;
    var zxLi = $('.xgtj-flcs-content ul li').length;
    $('.xgtj-flcs-left').on("click",function () {
        zxNow--;
        if(zxNow < 0){
            zxNow = zxLi -1;
        }
        $('.xgtj-flcs-content ul li').eq(zxNow).show().siblings().hide();
})
    $('.xgtj-flcs-right').on("click",function () {
        zxNow++;
        if(zxNow > zxLi - 1){
            zxNow = 0;
        }
        $('.xgtj-flcs-content ul li').eq(zxNow).show().siblings().hide();
    })

//    手机顶部
    $('#sj-nav-bar').click(function () {
        $('.sj-nav-menu').slideToggle();
    })
})