angular.module('htfmi')
.factory('userService', ['$q', '$window', 'facebookUserService', 'UserResource', '$sessionStorage', '$location',
    function($q, $window, facebookUserService, UserResource, $sessionStorage, $location) {
    return {
        // Stays null if user hasn't logged in correctly
        login: function(email, password, facebookLogin=false) {
            var error = null;
            console.log('baba');
            if (facebookLogin) {
                var data = facebookUserService.loginSystem().then(data => {
                    if (data) {
                        UserResource.log(data, user => {
                            user.$promise.then(user => {
                                $sessionStorage.currentUser = user;
                            });
                            // Important:
                            $location.path("/home");
                        });
                    }
                }, (err) => {
                    error = err;
                });

            } else {
                console.log({data: {email: email, password: password}});
                UserResource.log({data: {email: email, password: password}}, (userData) => {
                    $sessionStorage.currentUser = userData;
                }, (err) => {
                    error = err;
                });
            }
            return $sessionStorage.currentUser || {error: error};
        },
        logout: function() {
            $sessionStorage.currentUser = null;
        },
        isLoggedIn: function() {
            return !!$sessionStorage.currentUser;
        },
        currentUser: function() {
            return $sessionStorage.currentUser;
        },
        getProfilePicture: function () {
            if (!!$sessionStorage.currentUser && $sessionStorage.currentUser.profile_image) {
                return $sessionStorage.currentUser.profile_image;
            } else if (!!$sessionStorage.currentUser && $sessionStorage.currentUser.fb_id) {
                return 'https://graph.facebook.com/' + $sessionStorage.currentUser.fb_id + '/picture';
            }
            return 'resources/images/grumpy.jpg';
        }
    };
}]);