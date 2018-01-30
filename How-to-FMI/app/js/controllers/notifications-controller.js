'use strict';
angular.module('htfmi')
    .controller('NotificationsController', ['$scope', '$sce', '$sessionStorage', 'UserResource', '$http', 'userService',
        function ($scope, $sce, $sessionStorage, UserResource, $http, userService) {
        $scope.courses = [];
        
        $http.get("https://learn.fmi.uni-sofia.bg/webservice/rest/server.php?wstoken=" + userService.currentUser()['moodleToken'] + "&wsfunction=mod_forum_get_forums_by_courses&moodlewsrestformat=json")
            .then(function(response) {
                var forumInfos = response.data;
                var discussions = [];
                var forumIDs = [];
                for (var i = 0; i < forumInfos.length; i++) {
                    if (forumInfos[i]['numdiscussions'] == 0) {
                        continue;
                    } else {
                        forumIDs.push(forumInfos[i]['id']);
                    }
                }

                for (var j = 0; j < forumIDs.length; j++) {
                    $http.get('https://learn.fmi.uni-sofia.bg/webservice/rest/server.php?wstoken=' + userService.currentUser()['moodleToken'] + '&wsfunction=mod_forum_get_forum_discussions_paginated&moodlewsrestformat=json&forumid=' + forumIDs[j])
                        .then(function(response) {
                            for (var k = 0; k < response.data['discussions'].length; k++) {
                                response.data['discussions'][k]['message'] = $sce.trustAsHtml(response.data['discussions'][k]['message']);
                                discussions.push(response.data['discussions'][k]);    
                            }                          
                        });
                }

                function compare(a,b) {
                  return a.timemodified - b.timemodified;
                }

                $scope.discussions = discussions.sort(compare);
            });
}]);