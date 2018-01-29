'use strict';
angular.module('htfmi')
    .controller('EnrolledCoursesController', ['$scope', '$sessionStorage', 'UserResource', '$http', 
        function ($scope, $sessionStorage, UserResource, $http) {
        $scope.courses = [];
            sessionStorage.setItem('moodleToken', '3f6255f172334715678a6ea30eecf651');
            sessionStorage.setItem('moodleID', '7198');
            var token = sessionStorage.moodleToken;
            var moodleID = sessionStorage.moodleID;     
            $http.get("https://learn.fmi.uni-sofia.bg/webservice/rest/server.php?wstoken=" + token + "&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json&userid=" + moodleID)
                    .then(function(response) {
                        $scope.courses = response.data;
                    });
}]);