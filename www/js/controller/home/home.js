angular.module('home', [])
.controller('homeController', ['$rootScope', '$scope', '$location', '$http', '$q', '$timeout', function ($rootScope, $scope, $location, $http, $q, $timeout) {
    // get products
    // Product.getProducts(10).then(function (productArray) {
    //     console.log(productArray);
    //     $scope.products = productArray;
    //     console.log(productArray);
        
    // });

    // $scope.goToProductDetailPage = function (product) {
    //     Product.setProductObject(product);

    //     $timeout(function () {
    //         $location.path('product/detail');
    //     }, 0);        
    // }
    console.log('home')
}])