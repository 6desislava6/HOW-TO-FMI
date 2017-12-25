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
                    'notifications': 'Известия',
                    'schedule': 'Учебно разписание',
                    'bachelors': 'Бакалавър',
                    'software_engineering': 'Софтуерно инженерство',
                    'computer_science': 'Компютърни науки',
                    'informatics': 'Информатика',
                    'informatics systems': 'Информационни системи',
                    'applicable_mathematics': 'Приложна математика',
                    'students-info': 'За кандидат-студенти',
                    'all-courses': 'Курсове',
                    'faq': 'Често задавани въпроси',
                    'materials': 'Материали',
                    'jobs': 'Обяви за работа и стаж'
                };

                var places = $location.path().split('/').filter((v) => {
                    return v !== '';
                });

                $scope.translatedPlace = _.map(places, (place) => {
                    return place in translations ? translations[place] : place;
                });
          }]
        };
});