'use strict';
angular.module('htfmi')
    .controller('JobsController', ['$scope', function ($scope) {
        $scope.job_listings = [
            { name: 'Data Production Analyst',
             type: 'Работа',
             company_name: 'Experian',
             description: 'We are the leading global information services company, providing data and analytical tools to our clients around the world. We help businesses ...',
             img: 'resources/images/experian_logo.png',
             ref: '/' },

            { name: 'Нова стажантска програма на Astea Solutions',
             type: 'Стаж',
             company_name: 'Astea Solutions',
             description: 'Astea Solutions обявява новата си стажантска програма. Краен срок за кандидатстване: 16 октомври 2016 г. Повече информация ...',
             img: 'resources/images/astea_logo.png',
             ref: '/' },

            { name: 'Java Internship Program SAP Labs Bulgaria',
             type: 'Стаж',
             company_name: 'SAP Labs Bulgaria',
             description: 'As market leader in enterprise application software, SAP helps companies of all sizes and industries innovate through',
             img: 'resources/images/SAP-Logo.png',
             ref: '/' }
        ];
}]);