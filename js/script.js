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

			        $(this).siblings('.dt-scrollable').append("<div class='commentary animation-target'>" +
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
    			$('.abonner').css("background-color" , "#00CC00");
    			$(".abonner").html('Following');
    		}
    	});

    	$('.fa-heart').click(function() {
    		compteurLike++;
    		console.log(compteurLike + "compteur like");

    		//$(this).siblings('.like')
		    		if (compteurLike %2 == 0) {
							$('.color_like').removeClass('liked');
		   				$(".like").html("2035 like!");
		    		}
		    		else if (compteurLike % 2 != 0) {
		    			$('.color_like').addClass('liked');
		    			$(".like").html("2036 like!");
		    		}

    	});
		// Effets

		$('.thumbnail').click(function(e){
			//-- Ce bout de code me permet de récupérer la Classe
			// -- de l'élément cliqué, puis de le split et le reverse,
			// afin de récupérer le premier index
			// ainsi je peux lier le click sur l'élément avec l'ajout de Classe
			// dans la modal box qui permet d'avoir une image correspondante
			var current = e.target,
					currentClass = current.className;
					var test = currentClass.split('').reverse();
					var firstChar = parseInt(test[0]);
					console.log(test);
			$('.ui.basic.modal').modal('show');
			$('.dt-picture').addClass('img0'+ firstChar);
		});
		$('.fa-ellipsis-h').click(function(){
			$('.user-card').toggleClass('is_open');
		});
		$('.fa-plus').click(function(){
			$('.social-links').toggleClass('is_opened');
			$(this).toggleClass('rotated');
		});


});
