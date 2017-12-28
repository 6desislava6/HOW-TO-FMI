'use strict';
angular.module('htfmi')
    .controller('LoginController', ['$scope', '$window', 'userService', '$location', function ($scope, $window, userService, $location) {
        function displayErrors() {
            document.getElementById('login-errors').innerHTML = 'Wrong username or password.';
        }

        $scope.$watch(() => userService.isLoggedIn(), (isLoggedIn) => {
            if (isLoggedIn) {
                $location.path("/home");
            }
        });
}]);