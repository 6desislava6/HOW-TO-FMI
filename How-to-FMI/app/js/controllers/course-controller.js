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
		$scope.showContent = {};
		$scope.showContent['annotation'] = true;
		$scope.course = courses[id];
		$scope.changeCourseContent = function (contentName) {
			$scope.showContent = {};
			$scope.showContent[contentName] = true;
		};

		$scope.discussion = [
			{rating: 1, content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil"},
			{rating: 10, content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil"},
			{rating: 6, content: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil"}
		]
}]);