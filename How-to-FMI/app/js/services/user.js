angular.module('htfmi')
.factory('userService', function($q, $window, facebookUserService) {
    var currentUser = null;

    return {
        login: function() {
            currentUser = {};
            // TODO: getting them from the db | facebook login
        },
        logout: function() {
            currentUser = null;
        },
        isLoggedIn: function() {
            facebookUserService.isLoggedIn().then((loggedIn) => {
                if (loggedIn) {
                    currentUser = {};
                }
            });

            return currentUser !== null;
        },
        currentUser: function() {
            return currentUser;
        }
    };
});