	// configure our routes
angular.module('scotchApp')
	.config(function($routeProvider) {
			$routeProvider

				// route for the home page
				.when('/', {
					templateUrl : 'template/pages/home/index.html',
					controller  : 'mainController'
				})

				// route for the about page
				.when('/about', {
					templateUrl : 'template/pages/about/index.html',
					controller  : 'aboutController'
				})

				// route for the contact page
				.when('/contact', {
					templateUrl : 'template/pages/contact/index.html',
					controller  : 'contactController'
				})
				.otherwise({
					redirectTo: '/'
				});
		});
