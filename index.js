var http = require('http');

var dispatch = require('dispatch');
var querystring = require('querystring');

//Express
var express = require('express');
var app = express();


// express middleware
var bodyParser = require('body-parser');

//include mongoose

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/project-aardvark');


//Define our schema
var movieSchema = mongoose.Schema({
		title: String,
		year_of_release: Number

})


 app. get('/save-number', function(req,res){
 	Movie.find(function(err,movie){
 		if(err){
 			console.log(err)
 		}else{

			res.json(movie);

 		}

 	});

 });

//The following is the route of changing movie or adding a new
 app.post('/save-number',function(req, res){
 		console.log(req.body);
 		formData = req.body;
 		
var contact = new Contact(formData);
//save the movie, failure to the program should run an err then re-direct it to another route ie '/movies'

movie.save(function(err,movie){
	if(err){
		console.log(err);
	}else{

		console.log('Sucessfully saved the contact');
		res.redirect('/movies');
		}
		});


 });

// 						//Creating a dynamic database
						'POST /'; function (request,response){
							//Get parameters from the form
							formData = '',
							request.on('data',function(chunk){
								formData = querystring.parse(chunk.toString());
							});
							
							request.on('end', function(){
								console.log(formData);
							//Create an instance of movie
								var contact = new Contact(
								{

								name: formData.name,
								phone_number: formData.phone_number,
								occupation: formData.occupation
							}
							);

							Save the contact instance
							If successful the respond will be saved 

								response.end('Contact was posted')
							});
						}
					}



				})
			);

app.listen(9090,function(){
	console.log('Server running on 127.0.0.1:9090');

});

