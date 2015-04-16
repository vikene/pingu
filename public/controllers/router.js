'use strict'

var vikeneApp = angular.module('vikeneApp',[
	'ngRoute',
	'vikenAppControllers'

]);

vikeneApp.config(['$routeProvider',
	
	function($routeProvider)
	{
		$routeProvider.
		when('/projects',{
			templateUrl: 'views/mainView.html',
			controller: 'projectlistctrl' 
		
		}).
		when('/projects/:projectID',{
			templateUrl:'views/detailProject.html',
			controller:'detailctrl'
		
		}).
		otherwise({
			redirectTo:'/projects'
		});
	
	}
]);
