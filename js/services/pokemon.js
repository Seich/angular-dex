app.service('pokemon', function($http) {
	this.getOriginal = () => {
		return $http.get('http://pokeapi.co/api/v2/pokemon/', {
			params: {
				limit: 3
			}
		});
	};
});