app.component('pokemonListItem', {
	templateUrl: '/js/pokemonListItem/pokemonListItem.html',
	bindings: {
		pokemon: '<',
		index: '@'
	}
});