'use strict';
angular.module('htfmi').config(['$routeProvider', function Router($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'views/home.html',
        controller: 'MainCtrl',
        requireLogin: true
    }).when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationController',
        requireLogin: true
    }).when('/calendar', {
        requireLogin: true,
        templateUrl: 'views/calendar.html'
    }).when('/forum', {
        requireLogin: true,
        templateUrl: 'views/forumMain.html'
    }).when('/profile/:profilemenu', {
        requireLogin: true,
        templateUrl: 'views/profile.html',
        controller: 'ProfileController'
    }).when('/jobs', {
        requireLogin: true,
        templateUrl: 'views/jobs.html',
        controller: 'JobsController'
    }).when('/education/disciplines', {
        requireLogin: true,
        templateUrl: 'views/students-candidates.html',
        controller: 'StudentsCandidatesController'
    }).when('/education/disciplines/:courseName', {
        requireLogin: true,
        templateUrl: 'views/course.html',
        controller: 'CourseController'
    }).when('/education/disciplines/reviews', {
        requireLogin: true,
        templateUrl: 'views/students-candidates.html',
        controller: 'StudentsCandidatesController'
    }).when('/notifications', {
        requireLogin: true,
        templateUrl: 'views/notifications.html',
        controller: 'NotificationsController'
    }).when('/forum/thread', {
        requireLogin: true,
        templateUrl: 'views/forum.html'
    }).when('/forum/empty', {
        requireLogin: true,
        templateUrl: 'views/404.html'
    }).when('/missing', {
        requireLogin: true,
        templateUrl: 'views/404.html'
    }).when('/grades', {
        requireLogin: true,
        templateUrl: 'views/gradesMain.html'
    }).when('/grades/electives', {
        requireLogin: true,
        templateUrl: 'views/gradesElectives.html'
    }).when('/contacts', {
        templateUrl: 'views/contacts.html',
        controller: 'MainCtrl'
    }).when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginController'
    }).when('/forum/comments', {
        requireLogin: true,
        templateUrl: 'views/comments.html',
        controller: 'MainCtrl'
    }).when('/education/schedule/bachelors/:degree', {
        requireLogin: true,
        templateUrl: 'views/schedule-degree.html',
        controller: 'ScheduleDegree'
    }).when('/register', {
        templateUrl: 'views/register.html',
        controller: 'UserRegistrationController'
    }).when('/faq', {
        templateUrl: 'views/faq.html',
        controller: 'FAQController'
    }).when('/students-info', {
        templateUrl: 'views/students-info.html',
        controller: 'StudentsInfoController'
    }).when('/materials', {
        templateUrl: 'views/materials.html'
    }).when('/education/disciplines', {
        requireLogin: true,
        templateUrl: 'views/all-courses.html',
        controller: 'AllCoursesController'
    }).when('/jobs', {
        templateUrl: 'views/jobs.html',
        requireLogin: true,
        controller: 'JobsController'
    }).otherwise('/missing');
}]).run(function($rootScope, $route, $location, userService){
    $rootScope.$on("$locationChangeStart", function(event, next, current) {
        for(var i in $route.routes) {
            if(next.indexOf(i) != -1) {
                if($route.routes[i].requireLogin && !userService.isLoggedIn()) {
                    event.preventDefault();
                    $location.path("/login");
                } else if (!$route.routes[i].requireLogin && userService.isLoggedIn()) {
                    event.preventDefault();
                    $location.path("/home");
                }
            }
        }
    });
});
