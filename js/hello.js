app.component('hello', {
	templateUrl: '/js/hello.html',
	bindings: {
		name: '@'
	},
	controller: function(User) {
		User.getProfile().then((res) => {
			this.name = res.data.name;
		});

		this.alert = () => {
			alert('Hello,' + this.name)
		};
	}
});