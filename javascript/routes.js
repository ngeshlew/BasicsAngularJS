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
		})

	// create the controller and inject Angular's $scope
	.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	})

	.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	})

	.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
