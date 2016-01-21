angular.module('home', [])
.controller('homeController', ['$rootScope', '$scope', '$location', '$http', '$q', '$timeout', 'Product', function ($rootScope, $scope, $location, $http, $q, $timeout, Product) {
    console.log('im home');

    // get products
    Product.getProducts(10).then(function (productArray) {
        $scope.products = productArray;
        
    });

    $scope.goToProductDetailPage = function (product) {
        Product.setProductObject(product);

        $timeout(function () {
            $location.path('product/detail');
        }, 0);        
    }
}])