angular.module('personalizationSetting', [])
.controller('personalizationSettingController', ['$scope', '$location', '$http', '$state', '$ionicPopup', '$ionicLoading', 'User', function ($scope, $location, $http, $state, $ionicPopup, $ionicLoading, User) {
    $scope.updateUserFormSubmit = function (userInfor) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        var currentUser = AV.User.current();

        currentUser.set('name', userInfor.name);
        currentUser.set('address', userInfor.address);
        currentUser.save().then(function () {
            $ionicLoading.hide();
            var alertPopup = $ionicPopup.alert({
                title: '保存成功',
                template: '用户资料更新成功'
            });

            alertPopup.then(function (res) {
                alertPopup.close();

                $state.go('personalization', {}, {
                    reload: true
                });
            });
        })

    }
}])