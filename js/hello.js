app.config(($stateProvider) => {
	$stateProvider.state('home', {
		url: '/hello/:name',
		component: 'hello'
	});
});

app.component('hello', {
	templateUrl: '/js/hello.html',
	controller: function($stateParams) {
		this.name = $stateParams.name;
		
		this.alert = () => {
			alert('Hello,' + this.name)
		};
	}
});