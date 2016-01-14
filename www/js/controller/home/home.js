angular.module('home', [])
.controller('homeController', ['$scope', '$location', '$http', '$ionicSideMenuDelegate', 'Product', function ($scope, $location, $http, $ionicSideMenuDelegate, Product) {
    console.log('im home');

    //var newProduct = {
    //    'ProductName': 'test one'
    //}

    // var product = Product.saveProduct(newProduct);

    var products = Product.getProducts(5);
	$scope.toggleProjects = function () {
	    $ionicSideMenuDelegate.toggleLeft();
  	}
}])