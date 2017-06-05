'use strict';
angular.module('htfmi')
    .directive('coursemenu', function () {
        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'views/directives/navigation-path.html'
        };
});