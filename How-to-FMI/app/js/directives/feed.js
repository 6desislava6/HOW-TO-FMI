'use strict';
angular.module('htfmi')
    .directive('feed', function () {
        return {
            restrict: 'A',
            scope: {
                news: '='
            },
            replace: true,
            templateUrl: 'views/directives/feed.html'
        };
});