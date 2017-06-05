'use strict';
angular.module('htfmi')
    .controller('ProfileController', ['$scope', function ($scope) {
		$scope.showContent = {};
		$scope.showContent['annotation'] = true;

		$scope.changeCourseContent = function (contentName) {
			$scope.showContent = {};
			$scope.showContent[contentName] = true;
		};
}]);
