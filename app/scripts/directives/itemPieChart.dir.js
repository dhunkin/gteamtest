'use strict';

angular
	.module('gtestApp.itemPieChart.dir', [])
	.directive('itemPieChart', function(googleChartApiPromise) {
		return {
			scope: {
				item: '=item'
			},
			link: function(scope, elem) {
				var data = google.visualization.arrayToDataTable([
				  ['Passed', 'Failed'],
				  ['Failed',  scope.item.failed],
				  ['Passed',  scope.item.passed]
				]);

				var options = {
					backgroundColor: {
						fill: 'transparent'
					},
					colors: ['#ed7d31', '#70ad47'],
					legend: {
						position: 'none'
					},
					pieSliceBorderColor: '#d4d4d4',
					pieSliceText: 'value',
					pieSliceTextStyle: {
						fontSize: 10,
						color: '#000'
					},
					pieStartAngle: 45,
					tooltip: {
						text: 'both'
					},
					width: 80,
					chartArea: {
						top: 0,
						left: 0,
						width: 80,
						height: 80
					},
					enableInteractivity: false
				};

				var chart = new google.visualization.PieChart( elem[0] );
				chart.draw(data, options);
			}
		};
	});