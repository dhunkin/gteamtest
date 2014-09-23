'use strict';

angular
	.module('gtestApp.googleChartPromise.fac', [])
	.value('apiConfig', {
		version: '1',
		optionalSettings: {
			packages: ['corechart']
		}
	})
	.factory('googleChartApiPromise', function($rootScope, $q, apiConfig) {
		var apiReady = $q.defer();
		var onLoad = function() {
			var settings = {
				callback: function() {
					var oldCb = apiConfig.optionalSettings.callback;
					$rootScope.$apply(function() {
						apiReady.resolve();
					});

					if (angular.isFunction(oldCb)) {
						oldCb.call(this);
					}
				}
			};
			settings = angular.extend({}, apiConfig.optionalSettings, settings);
			window.google.load('visualization', apiConfig.version, settings);
		};
		var head = document.getElementsByTagName('head')[0];
		var script = document.createElement('script');

		script.setAttribute('type', 'text/javascript');
		script.src = 'https://www.google.com/jsapi';

		if (script.addEventListener) {
			script.addEventListener('load', onLoad, false);
		} else {
			script.onreadystatechange = function() {
				if (script.readyState === 'loaded' || script.readyState === 'complete') {
					script.onreadystatechange = null;
					onLoad();
				}
			};
		}
		head.appendChild(script);
		return apiReady.promise;
	});