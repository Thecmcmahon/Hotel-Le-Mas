
$(document).foundation()
  
  $(function myFunctionSmall(){
    if( $(window).width() <= 640 ) {
        console.log("the width is" + $(window).width());
        $.scrollify({
    section : ".spacing",
    sectionName : "section-name",
    interstitialSection : "",
    easing: "easeOutExpo",
    scrollSpeed: 1000,
    offset : -150,
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
    console.log("small screen");
  }
});

