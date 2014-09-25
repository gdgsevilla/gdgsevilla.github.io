'use strict';

/* Filters */
define(["angular", "js/services"], function(angular){
	var filter = angular.module('myApp.filters', []);
	filter.filter('interpolate', ['version', function(version) {
		return function(text) {
			return String(text).replace(/\%VERSION\%/mg, version);
		};
	}]);
})