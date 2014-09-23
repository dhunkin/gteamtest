'use strict';

angular
	.module('gtestApp.listItems.srv', [])
	.service('ListItems', function($http) {
		this.getItems = function() {
			var items = $http.get('/items');
			return items;
		};
	});