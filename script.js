$(document).ready(function(){
	var compteurBtnFollow = 0;
	    $('.envoyer').click(function(){
	        var toAdd = $('.envoyer_com.nico').val();
	        console.log(toAdd);
	        	         //$(".envoyer_com").val();
	        $(this).siblings('.view').append("<div class='commentary'>" + 
	        	"<a href='#' class='name_comm'>" + 
	        	"@bidule" + "</a>" + " : " + toAdd + "</div>");
    	});

	   /* var jeremy = function(){
	    	console.log($(this));
	    }; */

    	$('.abonner').click(function() {
    		compteurBtnFollow++;
    		console.log(compteurBtnFollow);
    		if (compteurBtnFollow %2 == 0) {
    			$('.abonner').css("background-color" , "green");
   				$(".abonner").html("S'abonner");
    		}
    		else if (compteurBtnFollow % 2 != 0) {
    			$('.abonner').css("background-color" , "red");
    			$(".abonner").html('Abonné');
    		}
    	});
});