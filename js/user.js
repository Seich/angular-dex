app.service('User', function($http) {
	this.getProfile = function() {
		return $http.get('/user.json');
	};
});