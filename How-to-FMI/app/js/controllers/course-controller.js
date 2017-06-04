'use strict';
angular.module('htfmi')
    .controller('CourseController', ['$scope', '$route', function ($scope, $route) {
	var id = $route.current.params.courseName;

		var courses = {
			elixir: {
				name: 'Функционално програмиране с Elixir',
				image: 'elixir.png'
			},
			iot: {
				name: 'Интернет на нещата',
				image: 'elixir.png'
			},
			cloudstartup: {
				name: 'Cloud StartUp',
				image: 'elixir.png'
			}
		}

		$scope.course = courses[id];
		$scope.changeCourseContent = function (contentName) {
			$scope.showContent = {};
			$scope.showContent[contentName] = true;
		};
}]);