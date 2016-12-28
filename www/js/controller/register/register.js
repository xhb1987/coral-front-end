angular.module('reigster', [])
.controller('registerStep1Controller', ['$scope', '$location', '$http', '$ionicPopup', 'User', function ($scope, $location, $http, $ionicPopup, User) {
	
	$scope.registerFormSubmit = function (userObject) {
        console.log($scope)
	    User.userRegister(userObject).then(function (data) {            
            User.setUserInstance(data);
            console.log(User.getUserInstance());
	    }, function (error) {
            $ionicPopup.alert({
                title: 'Error',
                template: error.message
            }).then(function (res) {
                console.log('test');
            });
        })
	}
}])