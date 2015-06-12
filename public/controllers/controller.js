'use strict'

var vikeneAppControllers = angular.module('vikenAppControllers',[]);

vikeneAppControllers.controller('projectlistctrl',['$scope','$http',function($scope,$http)
                     {
	$http.get('projlist').success(function(data)
{
	 $scope.projects = data;
	console.log('working')
})

	$http.get('/navigation').success(function(datum){
	
		$scope.navigator = datum;
		console.log('yoyo working')
	
	})
   
}]);

vikeneAppControllers.controller('detailctrl', ['$scope','$http','$routeParams',function($scope,$http,$routeParams){

	$http.get('/database').success(function(dud){
		$scope.users = dud;
	})
$http.get('/json/'+$routeParams.projectID+'.json').success(function(dud){
		$scope.projectID = dud;
	})
//	$scope.projectID = $routeParams.projectID;
	
}]);
