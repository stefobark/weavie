//for spinning the image
function rotation(){
	$("#spinBoxImage").rotate({
		angle:0, 
		animateTo:360
	});
}

//spin the wheel and get the truth. this function is responsible for the whole loop.
function truths() {

	//actually make it spin
	rotation();

	//hit up laravel for some stuff and display the other wheels
	$.ajax({
		type: "GET",
		url: '/truths',
		data: { userID: userID},
		success: function(data)
		{
		  //if the truth is 1 or 3 display the score and truth. it will be ready to spin again.
		  
		  if (data.truth == 1 || data.truth == 3 || data.truth == 2){
		  		$('#contentDiv').hide('slow', function(){
			  		$('#contentDiv').slideUp('slow','swing', function(){
			  			$('#contentDiv').html(data.text);
			  			$('#contentDiv').slideDown('slow');
			  		});
			  	});
		  		$('#wheelSpinText').hide('slow', function() {
		  			$('#wheelSpinText').html('<h2>Spin the Four Truths Wheel Again</h2>').fadeIn('slow');
		  		});

		  		$('#wheelSpinImage').html('<img id="spinBoxImage" src="/img/4wheel.svg">').fadeIn(2000);;
		  		$('#buttons').html('<button id="spin1or3" type="button" class="btn btn-primary btn-circle">reSpin 4</button>');
		  		
		  		$("#spin1or3").click(truths);
		  		} 
		  		
			//if its 4, display the 8fold path stuff. now, we have to let them spin again... so, replace html attributes that display text and the wheel
			//as well as the contentDiv and add the click function stuff
			else if (data.truth == 4 ){
				$('#wheelSpinImage').html('<img id="spinBoxImage" src="/img/8wheel.svg">');
				$('#contentDiv').hide('slow', function(){
			  		$('#contentDiv').slideUp('slow','swing', function(){
			  			$('#contentDiv').html(data.text);
			  			$('#contentDiv').slideDown('slow');
			  		});
			  	});
				$('#wheelSpinText').hide('slow', function() {
		  			$('#wheelSpinText').html('<h2>Eightfold Path</h2>').fadeIn('slow');
		  		});
      		$('#buttons').html('<button id="spin4" type="button" class="btn btn-primary btn-circle">Spin 8</button>');

				//this gets data for the individual 'roll', or 'draw'-- for the individual 'reading' and spins the wheel.

				$("#spin4").click(function() {
        			
					rotation();
					
					$.ajax({
						  	type: "GET",
						  	url: '/paths',
						  	data: { userID: userID},
						  	success: function(data){
						  		$('#contentDiv').hide('slow', function(){
							  		$('#contentDiv').slideUp('slow','swing', function(){
							  			$('#contentDiv').html(data);
							  			$('#contentDiv').slideDown('slow');
							  		});
							  	});
							  	$('#wheelSpinText').hide('slow', function() {
						  			$('#wheelSpinText').html('<h2>Four Noble Truths</h2>').fadeIn('slow');
						  		});
     							$('#wheelSpinImage').html('<img id="spinBoxImage" src="/img/4wheel.svg">');
						  	   $('#buttons').html('<button id="spin1or3" type="button" class="btn btn-primary btn-circle">reSpin 4</button>');
						  	   $("#spin1or3").click(truths);
						 	}//close the succesful ajax call stuff
				 	});//close the ajax call
				}); //close the spin click function
	     	}//close the else if for the 8 wheel
	     		
		}//close 'success' for the whole truth function's ajax stuff
   }); //close the whole ajax block
} //close the truths() function
	
						
$(document).ready(function() {
		
  //when id="spin" is clicked, run the above function
	$("#spin1or3").click(truths);

});//close on document ready
  

         		
