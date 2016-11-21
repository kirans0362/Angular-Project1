var myApp = angular.module("myApp",["ngMessages","ngResource"]);

myApp.controller("mainController", ["$scope","$log","$filter","$resource",function($scope,$log,$filter,$resource){
	$scope.name = "kiranmai";
	console.log($scope);
	$log.log($scope.name);
	$log.info($scope.name);
	$scope.formattedname = $filter('uppercase')($scope.name);
	$log.info($scope.formattedname);


}]);