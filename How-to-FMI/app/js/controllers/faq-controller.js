'use strict';
angular.module('htfmi')
    .controller('FAQController', ['$scope', function ($scope) {
    	$scope.application_items = ['Каква е процедурата по кандидатстване във ФМИ?', 
    	'Кога се провеждат конкурсните изпити?', 
    	'Какъв набор от документи е нужен за записване в дадена специалност?'];
}]);