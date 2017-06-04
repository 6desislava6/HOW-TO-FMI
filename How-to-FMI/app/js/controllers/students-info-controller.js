'use strict';
angular.module('htfmi')
    .controller('StudentsInfoController', ['$scope', function ($scope) {
    	console.log('here');
    	$scope.bachelor_degrees = ['Информатика', 
    								'Информационни системи',
    								'Компютърни науки', 
    								'Математика', 
    								'Математика и информатика', 
    								'Приложна математика', 
    								'Софтурено инженерство', 
    								'Статистика'];
}]);