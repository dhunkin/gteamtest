'use strict';

angular
	.module('gtestApp.common.anim', [])
	.animation('.slide', function() {
		var NgHideClassName = 'ng-hide';
		return {
			beforeAddClass: function(elem, className, done) {
				if(className === NgHideClassName) {
					$(elem).slideUp(done);
				}
			},
			removeClass: function(elem, className, done) {
				if(className === NgHideClassName) {
					$(elem).hide().slideDown(done);
				}
			}
		};
	})
	.animation('.fade', function() {
		var NgHideClassName = 'ng-hide';
		return {
			beforeAddClass: function(elem, className, done) {
				if(className === NgHideClassName) {
					$(elem).fadeOut(done);
				}
			},
			removeClass: function(elem, className, done) {
				if(className === NgHideClassName) {
					$(elem).hide().fadeIn(done);
				}
			}
		};
	});