'use strict';
angular.module('htfmi')
    .directive('adLoader', function () {
        return {
            restrict: 'A',
            scope: {
                loading: '='
            },
            replace: true,
            transclude: true,
            templateUrl: 'views/home.html',
            controller: ['$scope', function ($scope) {
                $scope.help = 'pomooosht';
          }]
        };
});