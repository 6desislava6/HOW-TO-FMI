'use strict';
angular.module('htfmi')
    .controller('LoginController', ['$scope', '$window', 'userService', function ($scope, $window, userService) {
        function displayErrors() {
            document.getElementById('login-errors').innerHTML = 'Wrong username or password.';
        }
}]);