'use strict';
angular.module('htfmi')
    .directive('navigationpath', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'views/directives/navigation-path.html',
            controller: ['$scope', '$location', function ($scope, $location) {
   				
				var translations = {
					'education': 'Обучение',
					'disciplines': 'Дисциплини',
				}

            	var places = $location.path().split('/').filter((v) => { return v!=='' });

            	$scope.translatedPlace =_.map(places, (place) => {
            		return place in translations ? translations[place] : place;
            	});
		  }]
        };
});