angular.module('logout', [])
.controller('logoutController', ['$scope', '$location', 'User', function ($scope, $location, User) {
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