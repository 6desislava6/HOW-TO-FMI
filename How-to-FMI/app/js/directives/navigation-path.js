'use strict';
angular.module('htfmi')
    .directive('navigationpath', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'views/directives/navigation-path.html',
            controller: ['$scope', '$location', function ($scope, $location) {
            	console.log($scope.translations);
            	var places = $location.path().split('/').filter((v) => { return v!=='' });
            	console.log(places);
            	
            	$scope.translatedPlace =_.map(places, (place) => {
            		return $scope.translations[place];
            	});
		  }]
        };
});