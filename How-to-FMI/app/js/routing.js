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
            templateUrl: 'views/calendar.html'
        }).when('/forum', {
            templateUrl: 'views/forumMain.html'
        }).when('/profile/:profilemenu', {
            templateUrl: 'views/profile.html',
            controller: 'ProfileController'
        }).when('/jobs', {
            templateUrl: 'views/jobs.html',
            controller: 'JobsController'
        }).when('/education/disciplines', {
            templateUrl: 'views/students-candidates.html',
            controller: 'StudentsCandidatesController'
        }).when('/education/disciplines/:courseName', {
            templateUrl: 'views/course.html',
            controller: 'CourseController'
        }).when('/education/disciplines/reviews', {
            templateUrl: 'views/students-candidates.html',
            controller: 'StudentsCandidatesController'
        }).when('/notifications', {
            templateUrl: 'views/notifications.html',
            controller: 'NotificationsController'
        }).when('/forum/thread', {
            templateUrl: 'views/forum.html'
        }).when('/forum/empty', {
            templateUrl: 'views/404.html'
        }).when('/missing', {
            templateUrl: 'views/404.html'
        }).when('/grades', {
            templateUrl: 'views/gradesMain.html'
        }).when('/grades/electives', {
            templateUrl: 'views/gradesElectives.html'
        }).when('/contacts', {
            templateUrl: 'views/contacts.html',
            controller: 'MainCtrl'
        }).when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginController'
        }).when('/forum/comments', {
            templateUrl: 'views/comments.html',
            controller: 'MainCtrl'
        }).when('/education/schedule/bachelors/:degree', {
            templateUrl: 'views/schedule-degree.html',
            controller: 'ScheduleDegree'
        }).when('/register', {
            templateUrl: 'views/register.html'
        }).when('/faq', {
            templateUrl: 'views/faq.html',
            controller: 'FAQController'
        }).when('/students-info', {
            templateUrl: 'views/students-info.html',
            controller: 'StudentsInfoController'
        }).when('/materials', {
            templateUrl: 'views/materials.html'
        }).when('/education/disciplines', {
            templateUrl: 'views/all-courses.html',
            controller: 'AllCoursesController'
        }).when('/jobs', {
            templateUrl: 'views/jobs.html',
            controller: 'JobsController'
        }).otherwise('/missing');
    }]);
})();


