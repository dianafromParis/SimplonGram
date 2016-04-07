$(document).ready(function(){
	var compteurBtnFollow = 0;
	var compteurLike = 0;
	var toAdd;



	    $('.envoyer').click(function() {
					var toShow = [];          
		        		$('input[name^=input_value]').each(function(){
		       			 	toShow.push($(this).val());
		       			 	toShow.join('');
	           			 	toAdd = toShow.join('');
		      			});
		      					console.log(toAdd);
		
			        $(this).siblings('.view').append("<div class='commentary'>" + 
			        	"<a href='#' class='name_comm'>" + 
			        	"@bidule" + "</a>" + " : " + toAdd + "</div>");
			        $(".envoyer_com").val('');
    		});

	   /* var jeremy = function(){
	    	console.log($(this));
	    }; */

    	$('.abonner').click(function() {
    		compteurBtnFollow++;
    		console.log(compteurBtnFollow);
    		if (compteurBtnFollow %2 == 0) {
    			$('.abonner').css("background-color" , "white");
   				$(".abonner").html("Follow");
    		}
    		else if (compteurBtnFollow % 2 != 0) {
    			$('.abonner').css("background-color" , "green");
    			$(".abonner").html('Following');
    		}
    	});

    	$('.fa-heart').click(function() {
    		compteurLike++;
    		console.log(compteurLike + "compteur like");

    		//$(this).siblings('.like')
		    		if (compteurLike %2 == 0) {
		    			$('.color_like').css("color" , "grey");
		   				$(".like").html("2035 like!");
		    		}
		    		else if (compteurLike % 2 != 0) {
		    			$('.color_like').css("color" , "red");
		    			$(".like").html("2036 like!");
		    		}
					    		
    	});
});