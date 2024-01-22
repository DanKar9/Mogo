$(function() {

    let header = $("#header");

    let intro = $("#intro");
   
    let introH = intro.innerHeight();

    let scrollPos = $(window).scrollTop();

    checkScroll (scrollPos, introH);



    $(window).on("scroll resize" , function(){
    
     introH = intro.innerHeight();

     scrollPos = $(this).scrollTop();
    
     checkScroll (scrollPos, introH);
})

   function checkScroll (scrollPos, introH) {
    if (scrollPos > introH) {
        header.addClass("fixed");
    } else {
        header.removeClass("fixed");
    }
   }


   /**************** burger */


$("[data-scroll]").on("click",function(event){

    event.preventDefault();

    let elementId = $(this).data("scroll");

    let elementOffset = $(elementId).offset().top;
    console.log(elementOffset)

    $("html,body").animate({ scrollTop:elementOffset - 99,

    },700)


})

let reviews = $("#reviewsSlider")
    

    reviews.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
      

   })



