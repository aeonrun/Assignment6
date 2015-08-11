$(document).ready(function(){
	


	$(this).click(function(){

	$("#topLeft").animate({
	top:"-=500px"
	});

	$("#bottomLeft").animate({
		bottom:"-=500px"
	});

	$("#topRight").animate({
		top:"-=500px"
	});

	$("#bottomRight").animate({
		bottom:"-=500px"
	});

	});

	$("#menu").click(function(){
   		$("#moremenu").slideToggle("slow");
  		$("body").addClass("container");
  	});


});


	
	//$('body').addClass('bdgimg');


