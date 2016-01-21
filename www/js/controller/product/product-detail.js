angular.module('product', [])
.controller('productDetailController', ['$rootScope', '$scope', '$location', '$http', 'Product', function ($rootScope, $scope, $location, $http, Product) {
    var product = Product.getProductObject();
    $scope.product = product;
    
}])