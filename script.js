$(document).ready(function(){
		
	$('a#pull').click(function(e){
		e.preventDefault();

		$('nav .menu').slideToggle('fast');
	})

});