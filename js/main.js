 new WOW().init();
/**collabse */
$(".questionsCollapse .card .firstbtn").addClass("text-primary")
$(".questionsCollapse .card .btn-link .first").addClass("fa-chevron-down").removeClass("fa-chevron-right")
 $(".questionsCollapse .card .btn-link").click((e)=>{
     if($(e.target).find("i").hasClass("fa-chevron-right"))
     {
        $(".questionsCollapse .card .btn-link").removeClass("text-primary")
        $(e.target).addClass("text-primary")
        $(".questionsCollapse .card .btn-link").find("i").addClass("fa-chevron-right").removeClass("fa-chevron-down")
        $(e.target).find("i").removeClass("fa-chevron-right").addClass("fa-chevron-down")
        
    }
    else{
        $(e.target).removeClass("text-primary")
        $(e.target).find("i").addClass("fa-chevron-right").removeClass("fa-chevron-down")
    }
     
 })


 /**slider */
 
 $(document).ready(function(){
    $('.demo').slick();
  });

  $('.demo').slick({
    slidesToShow: 3,
    zIndex: 1000,
    slidesToScroll: 2,
    arrows:false,
    dots : true,
    dotsClass:'slick-dots',
    pauseOnFocus:true,
    infinite: false,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]





  })

/**navbar and window scrolling */
var aboutTop = $("#about").offset().top;
var serviceTop = $("#services").offset().top;
var qTop = $("#questions").offset().top;
var conatctTop = $("#contact").offset().top;
$(window).scroll(()=>
{
    if($(window).scrollTop() > aboutTop )
    {
           $(".test").addClass("navScroll")
            $(".navbar .navbar-brand").addClass("linkScroll")
            $(".navbar .nav-link").addClass("linkScroll")
    }
    else{
        $(".test").removeClass("navScroll")
        $(".navbar .navbar-brand").removeClass("linkScroll")
        $(".navbar .nav-link").removeClass("linkScroll")
        $(".navbar-nav").find('.active').removeClass("active")
        $(".navbar-nav").children().eq(0).addClass("active")
    }
            

})


$(window).scroll(()=>{
    
    if($(window).scrollTop() > aboutTop && $(window).scrollTop() < serviceTop)
    {
        $(".navbar-nav").find('.active').removeClass("active")
        $(".navbar-nav").children().eq(1).addClass("active")
    }
    if($(window).scrollTop() > serviceTop && $(window).scrollTop() < qTop)
    {
        $(".navbar-nav").find('.active').removeClass("active")
        $(".navbar-nav").children().eq(2).addClass("active")
    }
    if($(window).scrollTop() > qTop && $(window).scrollTop() < conatctTop)
    {
        $(".navbar-nav").find('.active').removeClass("active")
        $(".navbar-nav").children().eq(3).addClass("active")
    }
    if($(window).scrollTop() > conatctTop )
    {
        $(".navbar-nav").find('.active').removeClass("active")
        $(".navbar-nav").children().eq(5).addClass("active")
    }


    
})  

$(".navbar button").click(()=>{
    if($(".navbar button").children().hasClass("navbar-toggler-icon"))
    {
        $(".navbar button").children().removeClass("navbar-toggler-icon").addClass("fas fa-times fa-2x")
    }
    else{
        $(".navbar button").children().addClass("navbar-toggler-icon").removeClass("fas fa-times fa-2x")
    }
})

/**spinner */
$(document).ready(()=>{
    $(".Spin").fadeOut(5000,()=>{
        $("html,body").css("overflow","auto")
    })
        
})

/**navlinks navigate */
$("a[href ^='#']").click((e)=>{
    currentSec = $(e.target).attr("href")
    console.log(currentSec)
    currentTop = $(currentSec).offset().top;
    $("html, body").animate({scrollTop : currentTop},2000)
})