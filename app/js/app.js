'use strict';

define(["angular", "angular-resource", "angular-route","js/controllers", "js/filters", "controllers/MyContrl"],
	function(angular){
		var app = angular.module('app', [
			'ngRoute',
			'app.filters',
			'app.services',
			'app.directives',
			'app.controllers'
		]);

		app.config(['$routeProvider', function($routeProvider) {
			$routeProvider.when('/view1', {templateUrl: 'partials/partial1.html', controller: 'MyCtrl1'});
			$routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
			$routeProvider.otherwise({redirectTo: '/view1'});
		}]);
	})

