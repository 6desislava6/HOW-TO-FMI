'use strict';
(function () {
    angular.module('htfmi').config(['$routeProvider', function Router($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        }).when('/education', {
            templateUrl: 'views/education.html',
            controller: 'EducationController'
        }).when('/calendar', {
            templateUrl: 'views/calendar.html',
            controller: 'CalendarController'
        }).when('/forum', {
            templateUrl: 'views/forumMain.html',
            controller: 'ForumController'
        }).when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'ForumController'
        }).when('/jobs', {
            templateUrl: 'views/jobs.html',
            controller: 'JobsController'
        }).when('/students-candidates', {
            templateUrl: 'views/students-candidates.html',
            controller: 'StudentsCandidatesController'
        }).when('/education/disciplines', {
            templateUrl: 'views/students-candidates.html',
            controller: 'StudentsCandidatesController'
        }).when('/education/disciplines/pchmi', {
            templateUrl: 'views/students-candidates.html',
            controller: 'StudentsCandidatesController'
        }).when('/education/disciplines/reviews', {
            templateUrl: 'views/students-candidates.html',
            controller: 'StudentsCandidatesController'
        }).when('/notifications', {
            templateUrl: 'views/notifications.html',
            controller: 'NotificationsController'
        }).when('/forum/thread', {
            templateUrl: 'views/forum.html',
            controller: 'ForumController'
        }).when('/forum/empty', {
            templateUrl: 'views/404.html',
            controller: 'ForumController'
        }).when('/grades', {
            templateUrl: 'views/gradesMain.html',
            controller: 'ForumController'
        }).when('/grades/electives', {
            templateUrl: 'views/gradesElectives.html',
            controller: 'ForumController'
        }).when('/contacts', {
            templateUrl: 'views/contacts.html',
            controller: 'MainCtrl'
        }).otherwise('/');
    }]);
})();


