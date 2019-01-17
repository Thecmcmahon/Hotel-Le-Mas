
$(document).foundation()

window.onscroll = function() {myFunction()};

function myFunction() {
  var img = document.getElementById("image1");
  var rect = img.getBoundingClientRect();
  x = rect.left;
  y = rect.top;
  w = rect.width;
  h = rect.height;
  
  console.log(y);

  if (y <= -10 && y >= -20) {
    document.getElementById("goto2").click();
    console.log(y);
    console.log("goto2");
    
    

  } else if (y <= -900 && y >= -910) {
    document.getElementById("goto3").click();
    console.log(y);
    console.log("goto3");

  } else if (y <= -1250 && y >= -1260) {
    document.getElementById("goto2").click();
    console.log(y);
    console.log("goto2");
} else if (y <= -800 && y >= -820) {
    document.getElementById("goto1").click();
    console.log(y);
    console.log("goto1");
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