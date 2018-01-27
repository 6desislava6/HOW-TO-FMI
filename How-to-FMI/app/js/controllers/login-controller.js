'use strict';
angular.module('htfmi')
    .controller('LoginController', ['$scope', '$window', 'userService', '$location', function ($scope, $window, userService, $location) {
        function displayErrors() {
            document.getElementById('login-errors').innerHTML = 'Wrong username or password.';
        }

        if (userService.isLoggedIn()) {
            $location.path("/home");
        } else {
            userService.login(null, null, true);
        }
}]);