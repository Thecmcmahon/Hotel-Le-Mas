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

// $(function myFunction1() {
// if ($(window).width() <= 640){
//   //document.write('<script src="js/smallscroll.js"></script>"');
//   $.getScript('smallscroll.js', function () {          
//       myFunctionSmall();  
//   });
//   console.log("1 small");
// } else if ($(window).width() >= 641) {
//   //document.write('<script src="js/bigscroll.js"></script>"');
//   $.getScript('bigscroll.js', function () {          
//       myFunctionBig();  
//   });
//   console.log("1 big");

// }
// });

        





// $(window).resize(function() {

//   if ($(window).width() <= 640){
//   $('.smallscripts').append('<script src="js/smallscroll.js"></script>');
//   $('.bigscripts').empty();
//   console.log("2 small")

// } else if ($(window).width() >= 641) {
//   $('.bigscripts').append('<script src="js/bigscroll.js"></script>');
//   $('.smallscripts').empty();
//   console.log("2 big")

// }

// });