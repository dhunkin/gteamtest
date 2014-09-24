'use strict';

angular
	.module('gtestApp.itemPieChart.dir', [])
	.directive('itemPieChart', function() {
		return {
			scope: {
				item: '=item'
			},
			link: function(scope, elem) {
				var failed = (scope.item && scope.item.failed) || 0;
				var passed = (scope.item && scope.item.passed) || 0;

				$(elem).jqplot([
					[
						['Failed', failed],
						['Passed', passed]
					]
				], {
					title: '',
					seriesDefaults: {
						renderer: $.jqplot.PieRenderer,
						rendererOptions: {
							sliceMargin: 1,
							startAngle: -45,
							seriesColors: ['#ed7d31', '#70ad47'],
							showDataLabels: true,
							diameter: 80,
							padding: 2,
							shadowAngle: 80,
							shadowOffset: 1,
							shadowWidth: 2,
							shadowAlpha: 0.04,
							dataLabels: 'value'
						}
					},
					grid: {
						drawBorder: false,
						shadow: false,
						background: 'transparent',
						_offsets: {
							left: 1,
							top: 1
						}
					},
					gridDimensions: {
						width: 90,
						height: 110
					},
					gridPadding: {
						left: 0,
						top: 0,
						bottom: 7,
						right: 2
					},
					legend: {
						show: false
					}
				});
			}
		};
	})
	.directive('itemBarProgress', function($http, $interval) {
		return {
			scope: {
				item: '='
			},
			link: function(scope, elem, attr) {
				var getValue = function() {
					$http.get('/items/' + scope.item.itemId + '/' + attr['itemBarProgress'] + '/status').success(function(res) {
						console.log('little success', res.val);
						var val = res.val;
						if (val <= 100 && val >= 0) {
							$(elem).find('.item-bar-value').addClass('running').css({
								width: val + '%'
							});
						} else {
							if(attr['itemBarProgress'] === 'ftest') {
								scope.item.state = 'accepted';
							}
							$interval.cancel(stop);
						}
					});
				}
				var stop;
				if (scope.item.state === 'running') {
					stop = $interval(getValue, 500);
				}
			}
		};
	});