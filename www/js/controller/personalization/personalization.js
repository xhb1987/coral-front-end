angular.module('personalization', [])
.controller('personalizationController', ['$scope', '$location', '$http', '$ionicPopup', 'User', function ($scope, $location, $http, $ionicPopup, User) {
    
    // var currentUserAttr = User.getCurrentUser();
    // currentUserAttr.then(function (data) {
    //     $scope.userAttr = data;
    // })


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