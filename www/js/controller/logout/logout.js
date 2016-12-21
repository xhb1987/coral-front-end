angular.module('logout', [])
.controller('logoutController', ['$scope', '$location', '$ionicModal', '$timeout', '$rootScope', 'User', function ($scope, $location, $ionicModal, $timeout, $rootScope, User) {
    $scope.logoutFormSubmit = function () {
        var userInstance = User.getUserInstance();
        if (userInstance) {
            User.userLogout(userInstance).then(function (data) {
                User.notifyObservers();
                $location.path('/');
            })
        }
    }
}])