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
//     var winTop2 = $(window).scrollTop();
//     if (winTop2 >= 100 &  120) {
//       	// var element = document.getElementById("foot");
//         document.getElementById("goto1").click();
// 		//element.scrollIntoView(top);
		
//     } 

//     if (winTop2 >= 250 & <=300) {
      
//        document.getElementById("goto2").click();
      	

//   };
  
// });
// });
// window.onscroll = function() {myFunction()};

// function myFunction() {
//   if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
//     document.getElementById("goto2").click();
//     //console.log("goto2");

//   }
// }




// $(document).ready(function(){
//   var x = 0;
//   $("body").scroll(function(){
//     $(console.log( x+= 1);
//   });
// });




