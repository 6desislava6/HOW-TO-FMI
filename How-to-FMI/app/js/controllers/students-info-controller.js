'use strict';
angular.module('htfmi')
    .controller('StudentsInfoController', ['$scope', function ($scope) {
        $scope.bachelorDegrees = ['Информатика',
            'Информационни системи',
            'Компютърни науки',
            'Математика',
            'Математика и информатика',
            'Приложна математика',
            'Софтурено инженерство',
            'Статистика'];
        $scope.exams = [
            { name: 'Математика I', date: '10 юни (събота)', time: '14,00 ч.' },
            { name: 'Математика II', date: '18 юни (неделя)', time: '9,00 ч.' }];
}]);