'use strict';
angular.module('htfmi')
    .directive('smallcalendar', function () {
        return {
            restrict: 'A',
            scope: {
                eventSources: '='
            },
            replace: true,
            templateUrl: 'views/directives/small-calendar.html',
            controller: ['$scope', function ($scope) {
                $scope.uiConfig = {
                    calendar: {
                        height: 450,
                        editable: true,
                        header: {
                            left: 'month basicWeek basicDay agendaWeek agendaDay',
                            center: 'title',
                            right: 'today prev,next'
                        }
                    }
                };
          }]
    };
});