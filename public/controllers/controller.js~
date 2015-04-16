'use strict'

var vikeneAppControllers = angular.module('vikenAppControllers',[]);

vikeneAppControllers.controller('projectlistctrl',['$scope','$http',function($scope,$http)
                     {
	$http.get('projects/projects.json').success(function(data)
{
	 $scope.projects = data;
	console.log('working')
})
   
}]);

vikeneAppControllers.controller('detailctrl', ['$scope','$routeParams',function($scope,$routeParams){
	$scope.projectID = $routeParams.projectID;
	
}]);
