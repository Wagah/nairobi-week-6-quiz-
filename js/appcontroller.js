//THis Module defines our application
var myApp = angular.module('MyApp',[]);

myApp.controller('blogsController',function($scope,$http){

var url = "http://jsonplaceholder.typicode.com/posts/1/comments";
	$http.get(url).success(function(response)
	{

		$scope.blogs = response;
	});

});




