'use strict';
angular.module('htfmi')
    .controller('MessagesController', ['$scope', '$sce', '$http', 'userService',
        function ($scope, $sce, $http, userService) {
        $scope.messages = [];
            $http.get("https://learn.fmi.uni-sofia.bg/webservice/rest/server.php?wstoken=" + userService.currentUser()['moodleToken'] + "&wsfunction=core_message_get_messages&moodlewsrestformat=json&useridto=7198&type=conversations&newestfirst=1&limitfrom=0&limitnum=0")
                .then(function(response) {
                    console.log(response);
                    var data = response.data;
                    if (data['error'] === undefined) {
                        for (var counter = 0; counter < data['messages'].length; counter++) {
                            data['messages'][counter]['text'] = $sce.trustAsHtml(data['messages'][counter]['text']);
                        }
                        $scope.messages = data['messages'];
                    } else {
                        $scope.error = "Проблем с връзката. Опитайте отново. :)";
                    }
                    
                });
            $scope.user = userService.currentUser()['email'];
            console.log(userService.currentUser()['email']);
}]);