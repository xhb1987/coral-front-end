angular.module('home', [])
.controller('homeController', ['$scope', '$location', '$http', '$ionicSideMenuDelegate', 'Product', function ($scope, $location, $http, $ionicSideMenuDelegate, Product) {
	console.log('im home');

	$scope.toggleProjects = function () {
	    $ionicSideMenuDelegate.toggleLeft();
  	}
}])