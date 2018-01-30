'use strict';
angular.module('htfmi')
    .controller('EnrolledCoursesController', ['$scope', '$sessionStorage', 'UserResource', '$http', 'userService',
        function ($scope, $sessionStorage, UserResource, $http, userService) {
        $scope.courses = [];    
            console.log("MOODLE ID:" + userService.currentUser()['moodleID']); 
            $http.get("https://learn.fmi.uni-sofia.bg/webservice/rest/server.php?wstoken=" + userService.currentUser()['moodleToken'] + "&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json&userid=" + userService.currentUser()['moodleID'])
                    .then(function(response) {
                        console.log(response);
                        $scope.courses = response.data;
                    });
}]);