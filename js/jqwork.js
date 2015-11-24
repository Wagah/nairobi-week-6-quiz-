//Check if the document has loaded
$(document).ready(function(){

		$("h1").mouseenter(function()
			{
			// $(this).fadeOut().fadeIn();

		$(this).toggle(1000).toggle(1000);
			});//end

		$("#project1 img").mouseenter(function()
			{
				$("#project1 h5").hide(1000);

			});
		
		$("#project1 img").mouseleave(function()
			{
				$("#project1 h5").show(1000);	
			});

		$("#project2 img").mouseenter(function()
			{
				$("#project2 h5").hide(1000);

			});
		
		$("#project2 img").mouseleave(function()
			{
				$("#project2 h5").show(1000);	
			});
		
		$("#project3 img").mouseenter(function()
			{
				$("#project3 h5").hide(1000);

			});
		
		$("#project3 img").mouseleave(function()
			{
				$("#project3 h5").show(1000);	
			});



//Some people represent the event parameter as 'e'
//this is a naming shortcut
		$('#contact-form').on('submit', function(e){
					url = '/';
					
					data = $(this).serialize();
					
					console.log(data);

					$.post(url,data)
					.done(function(){
						alert("You are logged in");

					}).fail(function(){
						alert("Oooops. Something went wrong");
					
					});

			//Prevents the default behaviour of the form
						e.preventDefault();
					});	



$("#contact-form").validate({
  rules: {
    fullname: "required",
    email: {
      required: true,
      email: true
    }
  },
  messages: {
    fullname: "Please specify your name",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    }
  }


});

$("#").click(function(){
    $("#Home").slideDown();
});



});