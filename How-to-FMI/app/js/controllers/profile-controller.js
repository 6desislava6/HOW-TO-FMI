'use strict';
angular.module('htfmi')
    .controller('ProfileController', ['$scope', function ($scope) {
        $scope.showContent = {};
        $scope.showContent['profile'] = true;

        $scope.changeCourseContent = function (contentName) {
            $scope.showContent = {};
            $scope.showContent[contentName] = true;
        };
}]);
