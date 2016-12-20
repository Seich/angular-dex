app.config(($stateProvider) => {
	$stateProvider.state('list', {
		url: '/list',
		component: 'pokemonList'
	});
});

app.component('pokemonList', {
	templateUrl: '/js/pokemonList/pokemonList.html',
	controller: function(pokemon) {
		this.pokemon = [];
		this.query = {
			name: ''
		};

		pokemon.getOriginal().then((res) => {
			this.pokemon = res.data.results;
		});
	}
});