angular.module('coral.product.services', [])
.factory('Product', ['$window', '$q', '$http', function ($window, $q, $http) {

    var q = $q.defer();

  //   var saveProduct = function (newProductConfig) {
  //       if (!newProductConfig.hasOwnProperty('ProductName')) {
  //           throw new Error({
  //               name: 'product save',
  //               message: 'product name is required'
  //           })
  //       };

  //       productQuery.count().then(function (count) {
  //           var productId = count;
  //           var productEntity = new productObject();
  //           productEntity.set('ProductId', productId);
  //           productEntity.set('ProductName', newProductConfig.ProductName);

  //           productEntity.save().then(function () {
  //               console.log('save success');
  //           }, function (error) {
  //               console.log(error)
  //           })
  //       })
        
  //   }

  //   var updateProduct = function (productId, config) {
  //       productQuery.get(productId).then(function (product) {
  //           if (config.hasOwnProperty('ProductName')) {
  //               product.set('ProductName', config.ProductName);
  //               product.save();
  //           }
  //       })
  //   }

    return {
    //    saveProduct: saveProduct,

        getProducts: function (limitation) {
            var limit = 10;

            if (limitation) {
                limit = limitation;
            }
            return $http.get(window.nodeUrl + 'product', {params: {limit: limit}}).then(function(data) {
                var productsArray = data
                q.resolve(productsArray.data);
                return q.promise;
            });
        },

        setProductObject: function (product) {
            productSingleObject = product;
        },

        getProductObject: function () {
            return productSingleObject;
        }
    } 
}]);