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


// $(function() {
//   $(window).scroll(function() {
//     var winTop = $(window).scrollTop();
//     if (winTop >= 30) {
//       	var element = document.getElementById("image2");

// 		element.scrollIntoView(top);
		
//     } else{
      	

//     }
//   });
// });





// $(function() {
//   $(window).scroll(function() {
//     var winBot = $(window).scrollTop();
//     if (winBot <= 30) {
//       	var element = document.getElementById("image1");

// 		element.scrollIntoView(top);
		
//     } else{
      	

//     }
//   });
// });