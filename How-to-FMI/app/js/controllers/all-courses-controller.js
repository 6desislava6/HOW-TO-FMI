'use strict';
angular.module('htfmi')
    .controller('AllCoursesController', ['$scope', '$routeParams', function ($scope, $routeParams) {
        $scope.params = $routeParams;
        $scope.categories = ['Дидактика',
            'Информатика и ИТ',
            'Математика',
            'ОКН',
            'Практикум',
            'Приложна математика',
            'Статистика',
            'ЯКН',
            'Друга'];

        $scope.bachelorDegrees = ['Информатика',
            'Информационни системи',
            'Компютърни науки',
            'Математика',
            'Математика и информатика',
            'Приложна математика',
            'Софтурено инженерство',
            'Статистика'];

        $scope.courses = [{
                ref: 'elixir',
                name: 'Функционално програмиране с Elixir',
                compatibleDegrees: 'И, ИС, КН, МИ, СИ',
                category: 'ЯКН, КП',
                year: '2',
                credits: '3.5',
                teachers: 'Николай Цветинов, Валентин Михов',
                img: 'resources/images/elixir.png'
            },
            {
                name: 'Интернет на нещата',
                compatibleDegrees: 'И, ИС, КН, МИ, СИ',
                category: 'ЯКН',
                year: '3',
                credits: '5',
                teachers: 'д-р Стоян Велев, доц. А.Семерджиев, доц. А.Димов',
                img: 'resources/images/iot.png'
            },
            {
                name: 'Cloud Startup',
                compatibleDegrees: 'И, ИС, КН, МИ, СИ',
                category: 'ЯКН',
                year: '3',
                credits: '5',
                teachers: 'доц. А.Семерджиев',
                img: 'resources/images/cloud-computing.png'
            }
        ];
}]);