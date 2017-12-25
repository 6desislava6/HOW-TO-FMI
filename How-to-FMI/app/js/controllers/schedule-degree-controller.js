'use strict';
angular.module('htfmi')
    .controller('ScheduleDegree', ['$scope', '$routeParams', '$window', function ($scope, $routeParams, $window) {
        var degree = $routeParams.degree;
        var DEGREES = {
            'software_engineering': [],
            'computer_science': [],
            'informatics': [],
            'informatics systems': [],
            'applicable_mathematics': []
        };
        $scope.calendarView = 'week';
        $scope.eventSources = [{
            events: [
                {
                    title: 'Семинар "Приложения на математиката за моделиране на реални процеси"',
                    start: '2017-06-03'
                },
                {
                    title: 'Семинар "Приложения на математиката за моделиране на реални процеси"',
                    start: '2017-06-03'
                },
                {
                    title: 'Семинар "Приложения на математиката за моделиране на реални процеси"',
                    start: '2017-06-03'
                }
            ]
        }];

        if (!(degree in DEGREES)) {
            $window.location.href = '#!/missing';
        }
        $scope.openInfo = function (event) {
            $scope.clickedEvent = true;
            var elementClicked = event.target;
            var eventDescription = document.getElementById('event-description');
            eventDescription.style.position = 'absolute';
            eventDescription.style.top = event.pageY + 'px';
            eventDescription.style.left = event.pageX + 'px';
            eventDescription.style.display = 'absolute';
            eventDescription.innerHTM = elementClicked.innerHTML + '<br> зала 101<button>Добави в календара</button>';
        };

}]);
