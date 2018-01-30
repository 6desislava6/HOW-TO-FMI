'use strict';
angular.module('htfmi')
    .controller('LoginController', ['$scope', '$window', 'userService', '$location',
        function ($scope, $window, userService, $location) {

        function displayErrors() {
            document.getElementById('login-errors').innerHTML = 'Wrong username or password.';
        }

        if (userService.isLoggedIn()) {
            $location.path("/home");
        }

        if (sessionStorage.getItem('facebookLoggedIn')) {
            userService.login(null, null, true);
        }

        $scope.login = function () {
            var user = userService.login($scope.email, $scope.password);
            if (user.error) {
                $scope.error = error;
            }
        };

}]);