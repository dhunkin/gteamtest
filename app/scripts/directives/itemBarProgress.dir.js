'use strict';

angular
	.module('gtestApp.itemBarProgress.dir', [])
	.directive('itemBarProgress', function($http, $interval) {
		return {
			scope: {
				item: '='
			},
			link: function(scope, elem, attr) {
				var getValue = function() {
					$http.get('/items/' + scope.item.itemId + '/' + attr['itemBarProgress'] + '/status').success(function(res) {
						var val = res.val;
						if (val <= 100 && val >= 0) {
							$(elem).find('.item-bar-value').addClass('running').css({
								width: val + '%'
							});
						} else {
							if (attr['itemBarProgress'] === 'ftest') {
								scope.item.state = 'accepted';
							}
							$interval.cancel(stop);
						}
					});
				};
				var stop;
				if (scope.item.state === 'running') {
					stop = $interval(getValue, 500);
				}
			}
		};
	})