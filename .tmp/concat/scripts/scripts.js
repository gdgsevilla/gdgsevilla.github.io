'use strict';
/**
 * @ngdoc overview
 * @name gdgsevillagithubioApp
 * @description
 * # gdgsevillagithubioApp
 *
 * Main module of the application.
 */
angular.module('gdgsevillagithubioApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch'
]).config([
  '$routeProvider',
  function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    }).when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    }).otherwise({ redirectTo: '/' });
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name gdgsevillagithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the gdgsevillagithubioApp
 */
angular.module('gdgsevillagithubioApp').controller('MainCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);
'use strict';
/**
 * @ngdoc function
 * @name gdgsevillagithubioApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gdgsevillagithubioApp
 */
angular.module('gdgsevillagithubioApp').controller('AboutCtrl', [
  '$scope',
  function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
]);