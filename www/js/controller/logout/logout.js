angular.module('logout', [])
.controller('logoutController', ['$scope', '$location', '$ionicModal', '$timeout', '$rootScope', function ($scope, $location, $ionicModal, $timeout, $rootScope) {
    $scope.logoutFormSubmit = function () {
        console.log('logout')
    }
}])