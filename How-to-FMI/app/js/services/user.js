angular.module('htfmi')
.factory('userService', ['$q', '$window', 'facebookUserService', 'UserResource', '$sessionStorage', '$location',
    function($q, $window, facebookUserService, UserResource, $sessionStorage, $location) {
    return {
        // Stays null if user hasn't logged in correctly
        login: function(email, password, facebookLogin=false) {
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
                }, (err) => console.log(err));

            } else {
                UserResource.log({data: {email: email, password: password}}, (userData) => {
                    $sessionStorage.currentUser = userData;
                }, error => console.log(error));
            }
            return $sessionStorage.currentUser;
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
            console.log($sessionStorage.currentUser);
            if ($sessionStorage.currentUser && $sessionStorage.currentUser.profile_image) {
                return $sessionStorage.currentUser.profile_image;
            } else if ($sessionStorage.currentUser && 'fb_id' in $sessionStorage.currentUser) {
                return 'https://graph.facebook.com/' + $sessionStorage.currentUser.fb_id + '/picture';
            }
            return 'resources/images/grumpy.jpg';
        }
    };
}]);