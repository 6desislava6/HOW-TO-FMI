'use strict';
angular.module('htfmi')
    .controller('LoginController', ['$scope', '$window', function ($scope, $window) {
        $scope.username = '';
        $scope.login = function() {
            if (this.username === 'atanas' && this.password === 'atanas') {
                $window.location.href = '#!/';
            } else {
                displayErrors();
            }
        };

        function displayErrors() {
            document.getElementById('login-errors').innerHTML = 'Wrong username or password.';
        }
}]);