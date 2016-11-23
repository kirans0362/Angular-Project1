
var myApp = angular.module("myApp",["ngMessages","ngResource","ngRoute"]);

myApp.config(function ($routeProvider) {

	$routeProvider

	.when('/',{
      templateUrl:'view/main.html',
      controller:"mainController"
	})

	.when('/second',{
		templateUrl:'view/second.html',
      controller:"secondController"

	})

});

myApp.service("customService",function(){
	var self = this;
	this.name = "satish";

	this.numbers = function(){
		return self.name.length;
	}
});

myApp.controller("mainController", ["$scope","$log","$filter","$resource","$timeout","customService",function($scope,$log,$filter,$resource,$timeout,customService){
	
	$log.log(customService.name);
	$log.log(customService.numbers());
	$scope.name = customService.name;
	$scope.$watch('name',function(){
		customService.name = $scope.name;
	});


}]);
myApp.controller("secondController",["$scope","customService",function($scope,customService){
	$scope.name = customService.name;
	$scope.$watch('name',function(){
		customService.name = $scope.name;
	});
}])