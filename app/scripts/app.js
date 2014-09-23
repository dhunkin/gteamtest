'use strict';

/**
 * @ngdoc overview
 * @name gtestApp
 * @description
 * # gtestApp
 *
 * Main module of the application.
 */

angular
  .module('gtestApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngMockE2E',
    'gtestApp.listItems.srv',
    'gtestApp.googleChartPromise.fac',
    'gtestApp.itemPieChart.dir',
    'gtestApp.slide.anim'
  ])
  .run(function($httpBackend) {
    $httpBackend.whenGET('/items').respond(items);
    $httpBackend.whenGET('/items/items.json').passThrough();
  });