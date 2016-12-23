app.config(($stateProvider) => {
	$stateProvider.state('pokemonDetail', {
		url: '/pokemon/:name',
		component: 'pokemonDetail'
	});
});

app.component('pokemonDetail', {
	templateUrl: '/js/pokemonDetail/pokemonDetail.html',
	controller: function($stateParams, pokemon) {
		pokemon.get($stateParams.name).then((res) => {
			this.pokemon = res.data;
		});
	}
});