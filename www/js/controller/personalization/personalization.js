angular.module('personalization', [])
.controller('personalizationController', ['$scope', '$location', '$http', '$ionicPopup', 'User', function ($scope, $location, $http, $ionicPopup, User) {
    
    $scope.currentUserAttr = User.getUserInstance();

    $scope.logoutSubmit = function () {
        var confirmPopup = $ionicPopup.confirm({
            title: '登出',
            template: '确定要登出吗？'
        });

        confirmPopup.then(function (res) {
            if (res) {
                User.userLogin($scope.currentUserAttr).then(function () {
                    User.setUserInstance();
                    User.notifyObservers();
                    $location.path('/');
                })
            } else {
                confirmPopup.close();
            }
        });

        
    }
    // $scope.logoutSubmit = function () {
    //     var confirmPopup = $ionicPopup.confirm({
    //         title: '登出',
    //         template: '确定要登出吗？'
    //     });

    //     confirmPopup.then(function (res) {
    //         if (res) {
    //             AV.User.logOut();
    //             $location.path('/');
    //         } else {
    //             confirmPopup.close();
    //         }
    //     });
    // }
}])