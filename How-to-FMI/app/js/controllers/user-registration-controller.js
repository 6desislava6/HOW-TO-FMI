'use strict';
angular.module('htfmi')
    .controller('UserRegistrationController', ['$scope', 'UserResource', '$location', function ($scope, UserResource, $location) {
    $scope.errors = [];
    $scope.errorOnRegister = null;

    $scope.registerUser = function () {
        $scope.errors = [];

        if ($scope.password !== $scope.password2) {
            $scope.errors.push("Паролите не са еднакви.");
        }

        if (!!$scope.errors && $scope.errors.length === 0) {
            UserResource.register({data: {email: $scope.email, password: $scope.password}},
            response => {
                console.log(response);
                $location.path('#/login');
            }, error => {
                $scope.errorOnRegister = error.data.message;
                console.log($scope.errorOnRegister);
            });
        }
    };

}]);