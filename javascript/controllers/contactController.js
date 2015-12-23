// create the controller and inject Angular's $scope
	angular.module('scotchApp').controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});