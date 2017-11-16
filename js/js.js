$(function () {
//    返回顶部
    $('#back-top').on("click",function () {
        $(document.body).animate({scrollTop:0},800);
    })

//    banner
    $('#banner-list').bxSlider();

//    首页业务领域
    if($(window).width() > 780){
        $('#domain-list').bxSlider({
            minSlides:4,
            maxSlides:4,
            moveSlides:1,
            slideWidth:222,
            slideMargin:38
        })
    }else {
        $('#domain-list').bxSlider({
            minSlides:2,
            maxSlides:2,
            moveSlides:1,
            slideWidth:150,
            slideMargin:38
        })
    }


    $('.domain-info ul li').hover(function () {
        $(this).find('.domain-mask').fadeIn(1000);
    },function () {
        $(this).find('.domain-mask').fadeOut();
    })
//业务范围
    $('.subpage-side-menu ul li').click(function () {
        var iNow = $(this).index();
        $('.subpage-side-menu ul li').eq(iNow).addClass('active').siblings().removeClass('active');
    })


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

//    成功案例
    var caseLi = $('.case-big-list li').length;
    var caseNow = 0;
    $('.case-left').click(function () {
        caseNow--;
        if(caseNow < 0){
            caseNow = caseLi - 1;
        }
        $('.case-big-list li').eq(caseNow).show().siblings().hide();
        $('.case-xs-pic li').eq(caseNow).show().siblings().hide();
    })
    $('.case-right').click(function () {
        caseNow++;
        if(caseNow > caseLi - 1){
            caseNow = 0;
        }
        $('.case-big-list li').eq(caseNow).show().siblings().hide();
        $('.case-xs-pic li').eq(caseNow).show().siblings().hide();
    })
})