'use strict';
angular.module('htfmi')
    .controller('EnrolledCoursesController', ['$scope', '$http', 'userService', '$window', 
        function ($scope, $http, userService, $window) {
        $scope.courses = [];    
        
        var currentUser = userService.currentUser();
        if (currentUser['moodleToken'] === undefined || currentUser['moodleID'] === undefined) {
            $window.location.href = "#!/moodleintegration";
        }
        
        $http.get("https://learn.fmi.uni-sofia.bg/webservice/rest/server.php?wstoken=" + userService.currentUser()['moodleToken'] + "&wsfunction=core_enrol_get_users_courses&moodlewsrestformat=json&userid=" + userService.currentUser()['moodleID'])
                .then(function(response) {
                    console.log(response);
                    $scope.courses = response.data;
                });
}]);