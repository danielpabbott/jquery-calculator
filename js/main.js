$(document).ready(function() {
  $("span").click(function(){
	   var display = $(this).text();
     var toCalc = $("#screen").text();
     if (!$(this).hasClass("operator")) {
       $("#screen").append(display);
     } else if ($(this).text() === "C") {
       $("#screen").empty();
     } else if ($(this).text() === "x") {
       $("#screen").append("*");
     } else if ($(this).text() === "+" || $(this).text() === "-") {
       $("#screen").append(display);
     } else if ($(this).text() === "=") {
       $("#screen").text(eval(toCalc));
     } else {
       $("#screen").append("/");
     }
  });
})
