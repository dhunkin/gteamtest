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
    'gtestApp.itemPieChart.dir',
    'gtestApp.common.anim'
  ])
  .run(function($httpBackend, $interval) {
    var stages = {
      'metrics': {
        val: 0
      },
      'build': {
        val: 0
      },
      'utest': {
        val: 0
      },
      'ftest': {
        val: 0
      }
    };

    var isFinished = function(item) {
      return item.val >= 100;
    };

    var res = {
      val: 0
    };

    var stop = $interval(function() {
      if (!isFinished(stages['metrics'])) {
        stages['metrics'].val += 5;
      }
      if (isFinished(stages['metrics']) && !isFinished(stages['build'])) {
        stages['build'].val += 5;
      } else if (isFinished(stages['build']) && !isFinished(stages['utest'])) {
        stages['utest'].val += 5;
      } else if (isFinished(stages['utest']) && !isFinished(stages['ftest'])) {
        stages['ftest'].val += 5;
      } else if (isFinished(stages['ftest'])) {
        $interval.cancel(stop);
      }
    }, 600);

    $httpBackend.whenGET('/items').respond(items);
    $httpBackend.whenGET(/items\/.*\/metrics\/status/).respond(stages['metrics']);
    $httpBackend.whenGET(/items\/.*\/build\/status/).respond(stages['build']);
    $httpBackend.whenGET(/items\/.*\/utest\/status/).respond(stages['utest']);
    $httpBackend.whenGET(/items\/.*\/ftest\/status/).respond(stages['ftest']);
  })
  .constant('States', {
    'complete': 'Complete',
    'fail': 'Fail',
    'pending': 'Pending',
    'accepted': 'Accepted',
    'rejected': 'Rejected',
    'running': 'Running'
  });