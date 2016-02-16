/*
 * JCF directive for basic AngularJS 1.x integration
 */

'use strict';

(function(factory) {
	if (typeof exports === 'object') {
		module.exports = factory;
	} else {
		factory();
	}
}(function() {
	angular
		.module('jcf', [])
		.directive('jcf', function() {
			return {
				restrict: 'A',
				link: function(scope, element, attrs) {
					jcf.replace(element);

					scope.$watch(attrs.ngModel, function(newValue) {
						jcf.refresh(element);
					});

					scope.$on('$destroy', function() {
						jcf.destroy(element);
					});
				}
			}
	});
}));
