angular.module('home', [])
.controller('homeController', ['$rootScope', '$scope', '$location', '$http', '$q', '$timeout', 'Product', 'User', function ($rootScope, $scope, $location, $http, $q, $timeout, Product, User) {
    // get products
    Product.getProducts(10).then(function (productArray) {
        console.log(productArray);
        $scope.products = productArray;
        console.log(productArray);
        
    });

    $scope.goToProductDetailPage = function (product) {
        Product.setProductObject(product);

        $timeout(function () {
            $location.path('product/detail');
        }, 0);        
    }
}])