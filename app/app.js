
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

myApp.controller("mainController", ["$scope","$log","$filter","$resource","$timeout",function($scope,$log,$filter,$resource,$timeout){
	$scope.handle = '';
	$scope.lowercasehandle = function(){
		return $filter('lowercase')($scope.handle )
	};

	$scope.name = "kiranmai";
	$timeout(function() {$scope.name = "Chinni"}, 3000);
	console.log($scope);
	$log.log($scope.name);
	$log.info($scope.name);
	$scope.formattedname = $filter('uppercase')($scope.name);
	$log.info($scope.formattedname);
	$scope.characters = 5;
	$scope.rules = [{Rule:"sleep early"},{Rule: "Eat healthy"},{Rule:"Drink water"}];


}]);
myApp.controller("secondController",["$scope",function($scope){
	$scope.name = "secondController"
}])