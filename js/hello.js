app.component('hello', {
	templateUrl: '/js/hello.html',
	bindings: {
		name: '@'
	},
	controller: function() {
		this.alert = () => {
			alert('Hello,' + this.name)
		};
	}
});