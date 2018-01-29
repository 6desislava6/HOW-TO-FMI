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

        // $scope.getTotal = function () {
        //     var total = 0;
        //     for(var i = 0; i < $scope.grades.length; i++){
        //         for(var j = 0; j < $scope.grades[i].length; j++){
        //             if($scope.grades[i][j].type.indexOf("Избираеми") < 0){
        //                 total += $scopes.grades[i][j].credits;
        //             }
        //         }

        //     }
        //     return total;
        // };


    }

]);