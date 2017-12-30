angular.module('htfmi')
.factory('facebookUserService', ['$q', '$window', '$sessionStorage',
    function($q, $window, $sessionStorage, UserResource) {
    return {
        /*global FB*/
        getUserInfo: function() {
            var deferred = $q.defer();
            FB.api('/me', function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;

        },
        isLoggedIn: function() {
            var deferred = $q.defer();
            FB.getLoginStatus(function(response) {
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        },
        loginSystem: function() {
            var response = FB.getAuthResponse().authResponse,
                token = response.accessToken,
                id = response.id,
                email = response.email;

            // Getting the id from the rest api and checking if it's
            // the same:
            UserResource.log({email: email, facebookToken: token}).then((user) => {
                $sessionStorage
            });

        }
    }
}]);