var app=angular.module('FirstApp',[]);

app.service('UsersService', ['$http',function($http){
	this.index=function(){
	return $http.get('http://jsonplaceholder.typicode.com/posts');
}
}]);