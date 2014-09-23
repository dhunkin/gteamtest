'use strict';

/**
 * @ngdoc function
 * @name gtestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the gtestApp
 */
angular.module('gtestApp')
	.controller('AboutCtrl', function($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];
	});