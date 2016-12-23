var app = angular.module('pokedex', ['ui.router']);

app.config(($urlRouterProvider, $stateProvider) => {
	$urlRouterProvider.when('', '/list');
});