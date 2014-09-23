'use strict';

angular
	.module('gtestApp.itemPieChart.dir', [])
	.directive('itemPieChart', function() {
		return {
			scope: {
				item: '=item'
			},
			link: function(scope, elem) {
				// var data = google.visualization.arrayToDataTable([
				//   ['Passed', 'Failed'],
				//   ['Failed',  scope.item.failed],
				//   ['Passed',  scope.item.passed]
				// ]);

				// var options = {
				// 	backgroundColor: {
				// 		fill: 'transparent'
				// 	},
				// 	colors: ['#ed7d31', '#70ad47'],
				// 	legend: {
				// 		position: 'none'
				// 	},
				// 	pieSliceBorderColor: '#d4d4d4',
				// 	pieSliceText: 'value',
				// 	pieSliceTextStyle: {
				// 		fontSize: 10,
				// 		color: '#000'
				// 	},
				// 	pieStartAngle: 45,
				// 	tooltip: {
				// 		text: 'both'
				// 	},
				// 	width: 80,
				// 	chartArea: {
				// 		top: 0,
				// 		left: 0,
				// 		width: 80,
				// 		height: 80
				// 	},
				// 	enableInteractivity: false
				// };

				// var chart = new google.visualization.PieChart( elem[0] );
				// chart.draw(data, options);
				var failed = (scope.item && scope.item.failed) || 0;
				var passed = (scope.item && scope.item.passed) || 0;

				$(elem).jqplot([[
					['Failed', failed],
					['Passed', passed]
				]], {
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
							shadowAlpha: .04,
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
					legend: { show:false }
				});
			}
		};
	});