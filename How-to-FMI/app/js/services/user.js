angular.module('htfmi')
.factory('userService', ['$q', '$window', 'facebookUserService', function($q, $window, facebookUserService) {
    var currentUser = null;

    return {
        login: function(email, facebookLogin=false) {
            if (facebookLogin) {
                facebookUserService.loginSystem.then((userData) => {
                    currentUser = userData; // Stays null if user
                    // hasn't logged in correctly
                });
            } else {
                // Normal login

            }
        },
        logout: function() {
            currentUser = null;
        },
        isLoggedIn: function() {
            facebookUserService.isLoggedIn().then((loggedIn) => {
                if (loggedIn.status === 'connected') {
                    currentUser = {};
                }
            });
            return currentUser !== null;
        },
        currentUser: function() {
            return currentUser;
        }
    };
}]);