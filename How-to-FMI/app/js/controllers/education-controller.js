'use strict';
angular.module('htfmi')
    .controller('EducationController', ['$scope', function ($scope) {
        $scope.eventSources = {
            events: [
                {
                    title: 'Семинар "Приложения на математиката за моделиране на реални процеси"',
                    start: ['юни', '11', '2017']
                },
                {
                    title: 'Семинар "Приложения на математиката за моделиране на реални процеси"',
                    start: ['юни', '11', '2017']
                },
                {
                    title: 'Семинар "Приложения на математиката за моделиране на реални процеси"',
                    start: ['юни', '11', '2017']
                }
            ]
    };
}]);