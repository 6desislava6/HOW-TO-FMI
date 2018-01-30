'use strict';
angular.module('htfmi')
    .controller('MoodleIntegrationController', ['$scope', '$sessionStorage', '$http', 'userService', 'UserResource', 'MoodleIntegration', '$window',
        function ($scope, $sessionStorage, $http, userService, UserResource, MoodleIntegration, $window) {
        $scope.errors = [];
        $scope.errorOnRegister = null;

        $scope.integrateMoodle = function () {
            $scope.errors = [];

            if ($scope.username === undefined) {
                $scope.errors.push("Mоля, въведете потребителското си име в Moodle.");
            }

            if ($scope.password === undefined) {
                $scope.errors.push("Моля, въведете паролата за профила си в Moodle.");
            }

            if (!!$scope.errors && $scope.errors.length === 0) {
                $http.post("https://learn.fmi.uni-sofia.bg/login/token.php?username=" +  $scope.username + "&password=" + $scope.password + "&service=moodle_mobile_app")
                     .then(function(response) {
                        var data = response.data;
                        if (data['error'] === undefined) {
                            $http.get("https://learn.fmi.uni-sofia.bg/webservice/rest/server.php?wstoken=" + data['token'] + "&wsfunction=core_webservice_get_site_info&moodlewsrestformat=json")
                                 .then(function(response) {
                                    var userInfoData = response.data;
                                    if (data['error'] === undefined) {
                                        var userEmail = userService.currentUser()['email'];
                                        MoodleIntegration.integrateMoodle({data: {email: userEmail, moodleToken: data['token'], moodleID: userInfoData['userid']}},
                                            response => {
                                                console.log(response);
                                                $sessionStorage.currentUser.moodleToken = data['token'];
                                                $sessionStorage.currentUser.moodleID = userInfoData['userid'];
                                                $window.location.href = "#!/home";
                                            }, error => {
                                                $scope.errorOnRegister = error.data.message;
                                                console.log($scope.errorOnRegister);
                                            });    
                                    } else {
                                        $scope.errors.push(data['error']);
                                    }
                                    
                                    });
                            
                        } else {
                            $scope.errors.push(data['error']);
                        }
                     });
            }
        };
}]);