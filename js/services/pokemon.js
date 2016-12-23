app.service('pokemon', function($http) {
	this.getOriginal = () => {
		return $http.get('http://pokeapi.co/api/v2/pokemon/', {
			params: {
				limit: 21
			}
		});
	};

	this.get = (name) => {
		return $http.get('http://pokeapi.co/api/v2/pokemon/' + name);
	};
});