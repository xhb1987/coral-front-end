angular.module('coral.product.services', [])
.factory('Product', ['$window', '$q', '$http', function ($window, $q, $http) {
  //   var productObject = AV.Object.extend('Products'),
  //       productQuery = new AV.Query(productObject);
    
  //   var productSingleObject;

  //   var q = $q.defer();

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

  //   var getProducts = function (limitation) {
  //       var limit = 10;

  //       if (limitation) {
  //           limit = limitation;
  //       }
  //       productQuery.limit(limit);
  //       productQuery.find().then(function (products) {
  //           var productsArray = []
            
  //           if (products.length > 0) {
  //               var productsLength = products.length;
  //               for (i = productsLength - 1; i >= 0; i -= 1) {
  //                   productsArray.push({
  //                       'ObjectId': products[i].id,
  //                       'ProductName': products[i].attributes.ProductName,
  //                       'ProductId': products[i].attributes.ProductId,
  //                       'CreateDate': products[i].createdAt,
  //                       'UpdateDate': products[i].updatedAt                        
  //                   })
  //               }
  //           }

  //           q.resolve(productsArray);
  //       })

  //       return q.promise;
  //   }

  //   var updateProduct = function (productId, config) {
  //       productQuery.get(productId).then(function (product) {
  //           if (config.hasOwnProperty('ProductName')) {
  //               product.set('ProductName', config.ProductName);
  //               product.save();
  //           }
  //       })
  //   }

  //   var setProductObject = function (product) {
  //       productSingleObject = product;
  //   }

  //   var getProductObject = function () {
  //       return productSingleObject;
  //   }

  //   return {
  //       saveProduct: saveProduct,

  //       getProducts: getProducts,

  //       updateProducts: updateProduct,

  //       setProductObject: setProductObject,

  //       getProductObject: getProductObject

  //   // set: function(key, value) {
  //   //   $window.localStorage[key] = value;
  //   // },
  //   // get: function(key, defaultValue) {
  //   //   return $window.localStorage[key] || defaultValue;
  //   // },
  //   // setObject: function(key, value) {
  //   //   $window.localStorage[key] = JSON.stringify(value);
  //   // },
  //   // getObject: function(key) {
  //   //   return JSON.parse($window.localStorage[key] || '{}');
  //   // }
  // }
}]);