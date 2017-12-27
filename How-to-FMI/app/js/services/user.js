angular.module('htfmi')
.factory('userService', function($q, $window) {
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
            return currentUser !== null;
        },
        currentUser: function() {
            return currentUser;
        }
    };
});