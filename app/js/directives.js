'use strict';

/* Directives */

define(["angular", "js/services"], function(angular){

	var directiva = angular.module('myApp.directives', []);
	dirrectiva.directive('appVersion', ['version', function(version) {
		return function(scope, elm, attrs) {
			elm.text(version);
		};
	}]);
})