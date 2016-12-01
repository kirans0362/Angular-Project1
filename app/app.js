
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
	
	$scope.people = [{
        name :"Kiranmai",
        Addresss:"Adress:1201", 
        city:"Milpitas",
        sate:"CA",
        zip:"95034"
       },
       {
        name :"Satish",
        Addresss:"Adress:1201", 
        city:"Milpitas",
        sate:"CA",
        zip:"95034"
       },
       {
        name :"Adabala",
        Addresss:"Adress:1201", 
        city:"Milpitas",
        sate:"CA",
        zip:"95034"
       }

       ],
	$scope.addressFunction = function (person) {
		return person.Addresss + "," + person.city + "," + person.sate + " " + person.zip
	}


}]);
myApp.controller("secondController",["$scope","customService",function($scope,customService){
	$scope.name = customService.name;
	$scope.$watch('name',function(){
		customService.name = $scope.name;
	});
}]);

myApp.directive("searchResult" , function(){
	return{
		restrict: 'AECM',
		templateUrl:'directives/searchResult.html',
		replace: true, 
		scope:{
           personName:"@",
           personAddress:"@",
           personObject:"=",
           personFunction:"&"
		},
		transclude:true
	}
})











