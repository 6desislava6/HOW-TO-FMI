angular.module('htfmi')
.factory('facebookUserService', ['$q', '$window', '$sessionStorage', 'UserResource',
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
                    deferred.reject(response.error);
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        },
        loginSystem: function() {
            var deferred = $q.defer();
            FB.getLoginStatus(function(response) {
                if (!response || response.error || !response.authResponse) {
                    deferred.reject(response.error);
                } else {
                    var response = response.authResponse,
                        token = response.accessToken,
                        id = response.id;

                    FB.api('/me', null, {fields: ['email','name','first_name','last_name', 'id'], access_token : token } ,function(response) {
                        response.facebookToken = token;
                        deferred.resolve({data: response});
                    });
                }
            });
            return deferred.promise;
        }
    }
}]);