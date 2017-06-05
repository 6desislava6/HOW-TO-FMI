'use strict';
angular.module('htfmi')
    .controller('AllCoursesController', ['$scope', function ($scope) {
    	$scope.categories = ['Дидактика', 
    								'Информатика и ИТ',
    								'Математика', 
    								'ОКН', 
    								'Практикум', 
    								'Приложна математика', 
    								'Статистика', 
    								'ЯКН', 
    								'Друга'];

    	$scope.bachelor_degrees = ['Информатика', 
    								'Информационни системи',
    								'Компютърни науки', 
    								'Математика', 
    								'Математика и информатика', 
    								'Приложна математика', 
    								'Софтурено инженерство', 
    								'Статистика'];

        $scope.courses = [
            {name: 'Функционално програмиране с Elixir', 
             compatible_degrees: 'И, ИС, КН, МИ, СИ', 
             category: 'ЯКН, КП', 
             year: '2', 
             credits: '3.5', 
             teachers: 'Николай Цветинов, Валентин Михов', 
             img: 'resources/images/elixir.png'},
            
            {name: 'Интернет на нещата', 
             compatible_degrees: 'И, ИС, КН, МИ, СИ', 
             category: 'ЯКН', 
             year: '3', 
             credits: '5', 
             teachers: 'д-р Стоян Велев, доц. А.Семерджиев, доц. А.Димов', 
             img: 'resources/images/iot.png'},

             {name: 'Cloud Startup', 
             compatible_degrees: 'И, ИС, КН, МИ, СИ', 
             category: 'ЯКН', 
             year: '3', 
             credits: '5', 
             teachers: 'доц. А.Семерджиев', 
             img: 'resources/images/cloud-computing.png'}            
        ];
}]);