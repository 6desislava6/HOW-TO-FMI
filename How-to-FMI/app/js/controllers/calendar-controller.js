'use strict';
angular.module('htfmi')
    .controller('CalendarController', ['$scope', function ($scope) {
   		$scope.eventSources = {
            events: [
                {
                    title: 'Представяне на проект по ПЧМИ',
                    start: '2017-06-08'
                },
                {
                    title: 'РСА-представяне на проект',
                    start: '2017-06-17'
                },
                {
                    title: 'Wеb-представяне на проект',
                    start: '2017-06-23'
                }
            ],
            textColor: 'black' // an option!
        };

        $scope.uiConfig = {
          calendar:{
            height: 450,
            editable: true,
            header:{
              left: 'month basicWeek basicDay agendaWeek agendaDay',
              center: 'title',
              right: 'today prev,next'
            }
          }
        };
}]);