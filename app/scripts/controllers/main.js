'use strict';

/**
 * @ngdoc function
 * @name gtestApp.controller:listCtrl
 * @description
 * # listCtrl
 * Controller of the gtestApp
 */
angular.module('gtestApp')
	.controller('listCtrl', function($scope, ListItems, States) {
		var itemsPromise = ListItems.getItems();
		itemsPromise.success(function(data) {
			$scope.items = data.items;
		});

		$scope.getStateLebel = function(itemState) {
			return States[itemState] || '';
		};

		$scope.getItemClass = function(item) {
			if (item.type === 'build') {
				switch (item.state) {
					case 'complete':
						return 'build-complete';
					case 'fail':
						return 'build-fail';
					case 'pending':
						return 'build-pending';
					default:
						return '';
				}
			} else if (item.type === 'firewall') {
				switch (item.state) {
					case 'accepted':
						return 'firewall-accepted';
					case 'rejected':
						return 'firewall-rejected';
					case 'running':
						return 'firewall-running';
					default:
						return '';
				}
			}
		};

		$scope.getBarClass = function(item) {
			if (item.state === 'complete' || item.state === 'accepted') {
				return 'positive-sign';
			} else if (item.state === 'rejected') {
				if (item.metrics && item.metrics.security && !item.metrics.security.positive) {
					return 'critical-sign';
				} else {
					return 'negative-sign';
				}
			}
			return '';
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
			if ( (!(item.type === 'build') || !(item.state === 'pending')) &&  (!(item.type === 'firewall') || !(item.state === 'running'))) {
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