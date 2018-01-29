angular.module('htfmi')
.factory('UserResource', ['$resource', function ($resource) {
	var resourceLink = 'http://0.0.0.0:5000/users/';
    return $resource(resourceLink + ':email', {id: '@_id'}, {
        getAll: {method: 'GET', url: resourceLink + 'all'},
        register: {method: 'PUT', url: resourceLink + 'register_service', isArray: false},
        log: {method: 'POST', url: resourceLink + 'register_service', isArray: false}
    });
}])
.factory('Courses', ['$resource', function ($resource) {
	// using rest API here.
    return null;
}])
.factory('SusiResource', ['$resource', function ($resource) {
	var resourceLink = 'http://0.0.0.0:5000/susi/:susiUser/:susiPassword';
    return $resource(resourceLink, {susiUser:'@susiUser', susiPassword: '@susiPassword'}, {
    	get: {method: 'GET', isArray:true},
    });
}]);