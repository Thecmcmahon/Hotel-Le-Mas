
$(document).foundation()


// if ( $(window).width() < 641) {      
//   function myFunction() {
//   var img = document.getElementById("image1");
//   var rect = img.getBoundingClientRect();
//   x = rect.left;
//   y = rect.top;
//   w = rect.width;
//   h = rect.height;
  
//   console.log(y);

//   if (y <= -10 && y >= -13) {
//     document.getElementById("goto2").click();
//     console.log(y);
//     console.log("goto2");
    
    

//   } else if (y <= -920 && y >= -930) {
//     document.getElementById("goto3").click();
//     console.log(y);
//     console.log("goto3");

//   } else if (y <= -1250 && y >= -1260) {
//     document.getElementById("goto2").click();
//     console.log(y);
//     console.log("goto2");
// } else if (y <= -800 && y >= -820) {
//     document.getElementById("goto1").click();
//     console.log(y);
//     console.log("goto1");
//   }
// }
// } 
// else {
//   console.log("big screen") 
// }

// $(window).resize(function() {
//     if( $(this).width() <= 640 ) {
//         console.log("the width is" + $(window).width());
//         window.onscroll = function() {myFunction()};

// function myFunction() {
//   var img = document.getElementById("image1");
//   var rect = img.getBoundingClientRect();
//   x = rect.left;
//   y = rect.top;
//   w = rect.width;
//   h = rect.height;
  
//   console.log(y);

//   if (y <= -10 && y >= -13) {
//     document.getElementById("goto2").click();
//     console.log(y);
//     console.log("goto2");
    
    

//   } else if (y <= -920 && y >= -930) {
//     document.getElementById("goto3").click();
//     console.log(y);
//     console.log("goto3");

//   } else if (y <= -1250 && y >= -1260) {
//     document.getElementById("goto2").click();
//     console.log(y);
//     console.log("goto2");
// } else if (y <= -800 && y >= -820) {
//     document.getElementById("goto1").click();
//     console.log(y);
//     console.log("goto1");
//   }
// }
//     }
// });


window.onscroll = function() {myFunction()};

function myFunction() {
  var img = document.getElementById("image1");
  var rect = img.getBoundingClientRect();
  x = rect.left;
  y = rect.top;
  w = rect.width;
  h = rect.height;
  
  console.log(y);

  if (y <= -30 && y >= -40 && $(window).width() < 641) {
    document.getElementById("goto2").click();
    console.log(y);
    console.log("from 1 to 2");
  } else if (y <= -850 && y >= -860 && $(window).width() < 641) {
    document.getElementById("goto3").click();
    console.log(y);
    console.log("from 2 to 3");
  } else if (y <= -1680 && y >= -1700 && $(window).width() < 641) {
    document.getElementById("goto4").click();
    console.log(y);
    console.log("from 3 to 4");
  } else if (y <= -2520 && y >= -2530 && $(window).width() < 641) {
    document.getElementById("goto5").click();
    console.log(y);
    console.log("from 4 to 5");
  } else if (y <= -3350 && y >= -3370 && $(window).width() < 641) {
    document.getElementById("goto6").click();
    console.log(y);
    console.log("from 5 to 6");
  } else if (y <= -4160 && y >= -4180 && $(window).width() < 641) {
    document.getElementById("gotom").click();
    console.log(y);
    console.log("from 6 to map");
  } else if (y <= -4910 && y >= -4920 && $(window).width() < 641) {
    document.getElementById("goto6").click();
    console.log(y);
    console.log("from map to 6");
  } else if (y <= -4110 && y >= -4120 && $(window).width() < 641) {
    document.getElementById("goto5").click();
    console.log(y);
    console.log("from 6 to 5");
  } else if (y <= -3310 && y >= -3320 && $(window).width() < 641) {
    document.getElementById("goto4").click();
    console.log(y);
    console.log("from 5 to 4");
  } else if (y <= -2480 && y >= -2490 && $(window).width() < 641) {
    document.getElementById("goto3").click();
    console.log(y);
    console.log("from 4 to 3");
  }  else if (y <= -1650 && y >= -1660 && $(window).width() < 641) {
    document.getElementById("goto2").click();
    console.log(y);
    console.log("from 3 to 2");
  } else if (y <= -810 && y >= -820 && $(window).width() < 641) {
    document.getElementById("goto1").click();
    console.log(y);
    console.log("from 2 to 1");
  }

}
// y = 0
// y <= -10 && y >= -20
// y = 0 

// if 





// $(document).ready(function(){
//   $(".form a").click(function(){
//     var x = $("#image2").position();
    
//     console.log(x.top);
//   });
// });

// function myFunction() {
//   var div = document.getElementById("myDiv");
//   var rect = div.getBoundingClientRect();
//   x = rect.left;
//   y = rect.top;
//   w = rect.width;
//   h = rect.height;
//   alert ("Left: " + x + ", Top: " + y + ", Width: " + w + ", Height: " + h);
// }