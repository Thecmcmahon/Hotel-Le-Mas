$(document).foundation()

$("[data-menu-underline-from-center] a").addClass("underline-from-center");

$(function() {
  $(window).scroll(function() {
    var winTop = $(window).scrollTop();
    if (winTop >= 30) {
      $("header").addClass("shrink");
      $("header h1").addClass("shrink2");
      $("header img").addClass("shrink3");
    } else{
      $("header").removeClass("shrink");
      $("header h1").removeClass("shrink2");
      $("header img").removeClass("shrink3");
    }
  });
});


// $(function(){
//   if ( $(window).width() < 641){
// $.scrollify({
//     section : ".spacing",
//     sectionName : "section-name",
//     interstitialSection : "",
//     easing: "easeOutExpo",
//     scrollSpeed: 1000,
//     offset : 0,
//     scrollbars: true,
//     standardScrollElements: "",
//     setHeights: false,
//     overflowScroll: true,
//     updateHash: true,
//     touchScroll:true,
//     before:function() {},
//     after:function() {},
//     afterResize:function() {},
//     afterRender:function() {}
//   });
//   } else{
//     console.log("big screen");
//   }
// });
$(window).resize(function() {
    if( $(this).width() <= 640 ) {
        console.log("the width is" + $(window).width());
        $.scrollify({
    section : ".spacing",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    offset : 0,
    scrollbars: true,
    standardScrollElements: "",
    setHeights: false,
    overflowScroll: true,
    updateHash: true,
    touchScroll:true,
    before:function() {},
    after:function() {},
    afterResize:function() {},
    afterRender:function() {}
  });
  } else{
    console.log("big screen");
  }
});
        


