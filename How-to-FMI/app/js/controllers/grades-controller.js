'use strict';
angular.module('htfmi')
    .controller('GradesController', ['$scope', 'SusiResource', function ($scope, SusiResource) {
        console.log('baba');

        $scope.getGrades = function () {
            $scope.loading = true;
            SusiResource.get({susiUser: $scope.susiUsername, susiPassword: $scope.password}, (grades) => {
                $scope.grades = grades;
                console.log(grades);
                $scope.loading = false;
            });
        };
    }

]);