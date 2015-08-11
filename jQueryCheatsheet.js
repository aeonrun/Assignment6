// JQuery is a collection of functions and code for Javascript
//inside <head> of HTML file, include JQuery library
//<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"> </script>

//JQuery makes easy to select elements in DOM, including HTML tags or elements or ids, classes in CSS.
//$("p")
//$(#id)

// $ is shorthand to access jQuery library

// JavaScript Events -- e.g., click event, or let the entire document to execute


//$(document).ready() 
// ready event is executed when all of the pages DOM elements are loaded
//ensuring all elements are on the pages


function(){   
	alert("I am anonymous!"); 

}

$("body").hide(); 

$("body").show();

$("#section-one").fadeOut(); 

$("#section-one").fadeIn();

$("#section-one").fadeOut(1000);
//fade out over 1 second

$("#section-one").fadeIn(4000);
//fade in over 4 seconds

$("#section-one").slideUp(1000); 
//Fade out over 1 second

$("#section-one").slideDown(4000); 
//Fade in over 4 seconds

//Animate CSS with jQuery's animate()
$(".my-element").animate({})

$("ul li a").click(function(){
	alert('imclicked!');   
});














