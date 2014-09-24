'use strict';

/**
 * @ngdoc function
 * @name gtestApp.controller:listCtrl
 * @description
 * # listCtrl
 * Controller of the gtestApp
 */
angular.module('gtestApp')
	.controller('listCtrl', function($scope, ListItems) {
		var a = ListItems.getItems();
		a.success(function(data) {
			$scope.items = data.items;
		});

		$scope.getItemClass = function(item) {
			if (item.type === 'build') {
				if (item.state === 'Complete') {
					return 'build-complete';
				} else if (item.state === 'Fail') {
					return 'build-fail';
				} else if (item.state === 'Pending') {
					return 'build-pending';
				}
			} else if (item.type === 'firewall') {
				if (item.state === 'Accepted') {
					return 'firewall-accepted';
				} else if (item.state === 'Rejected') {
					return 'firewall-rejected';
				} else if (item.state === 'Running') {
					return 'firewall-running';
				}
			}
		};

		$scope.getBarClass = function(item) {
			if (item.state === 'Complete' || item.state === 'Accepted') {
				return 'positive-sign';
			} else if (item.state === 'Rejected') {
				if (item.metrics && item.metrics.security && !item.metrics.security.positive) {
					return 'critical-sign';
				} else {
					return 'negative-sign';
				}
			}
		};

		$scope.isCritical = function(item) {
			return item.metrics && item.metrics.security && !item.metrics.security.positive;
		};

		$scope.isBadMetrics = function(item) {
			return (item.metrics && item.metrics.test && !item.metrics.test.positive) ||
				(item.metrics && item.metrics.maintainability && !item.metrics.maintainability.positive) ||
				(item.metrics && item.metrics.security && !item.metrics.security.positive) ||
				(item.metrics && item.metrics.workmanship && !item.metrics.workmanship.positive);
		};

		$scope.showDetails = function(item) {
			alert('There are no detail view here.');
		};

		$scope.expandMe = function(item) {
			if( !(item.type === 'build') || !(item.state === 'Pending') ) {
				item.expanded = (item.expanded ? !item.expanded : true) && $scope.collapseAll($scope.items);
			}
		};

		$scope.collapseAll = function(items) {
			$.map(items, function(item) {
				item.expanded = false;
			});
			return true;
		};
	});