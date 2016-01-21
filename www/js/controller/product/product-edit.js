angular.module('product', [])
.controller('productEditController', ['$scope', '$location', '$http', 'Product', function ($scope, $location, $http, Product) {

    $scope.productFormSubmit = function (product) {
        Product.saveProduct({ 'ProductName': product.name });
    }
}])