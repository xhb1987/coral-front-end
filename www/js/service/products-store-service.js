angular.module('bolunbao.services', [])
.factory('Product', ['$window', '$q', '$http', function ($window, $q, $http) {
    var productObject = AV.Object.extend('Products'),
        productQuery = new AV.Query(productObject);

    function getAllProductCount() {
        productQuery.count()
    }

    var saveProduct = function (newProductConfig) {
        if (!newProductConfig.hasOwnProperty('ProductName')) {
            throw new Error({
                name: 'product save',
                message: 'product name is required'
            })
        };

        productQuery.count().then(function (count) {
            console.log(count);
        })
        
    }

    var getProducts = function (limitation) {
        var limit = 10;

        if (limitation) {
            limit = limitation;
        }
        productQuery.limit(limit);
        productQuery.find().then(function (products) {
            console.log(products);
            return products;
        })
    }

    return {
        saveProduct: saveProduct,

        getProducts: getProducts

    // set: function(key, value) {
    //   $window.localStorage[key] = value;
    // },
    // get: function(key, defaultValue) {
    //   return $window.localStorage[key] || defaultValue;
    // },
    // setObject: function(key, value) {
    //   $window.localStorage[key] = JSON.stringify(value);
    // },
    // getObject: function(key) {
    //   return JSON.parse($window.localStorage[key] || '{}');
    // }
  }
}]);