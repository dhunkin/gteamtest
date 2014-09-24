'use strict';

angular
	.module('gtestApp.listItems.srv', [])
	.service('ListItems', function($http) {
		this.getItems = function() {
			return $http.get('/items');
		};
	});