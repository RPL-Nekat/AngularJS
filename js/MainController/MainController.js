app.controller('MainController',['$scope','UsersService', function($scope,UsersService){
	$scope.title="Postingan";
	
	UsersService.index().success(function(data){
		$scope.post=data;
});
}]);