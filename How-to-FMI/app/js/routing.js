'use strict';
(function () {
    angular.module('htfmi').config(['$routeProvider', function Router($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'HowToFMIController'
        }).when('/education', {
            templateUrl: 'views/education.html',
            controller: 'EducationController'
        }).when('/calendar', {
            templateUrl: 'views/calendar.html',
            controller: 'CalendarController'
        }).when('/forum', {
            templateUrl: 'views/forumMain.html',
            controller: 'ForumController'
        }).when('/jobs', {
            templateUrl: 'views/jobs.html',
            controller: 'JobsController'
        }).when('/students-candidates', {
            templateUrl: 'views/students-candidates.html',
            controller: 'StudentsCandidatesController'
        }).otherwise('/');
    }]);
})();