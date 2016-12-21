angular.module('login', [])
.controller('loginController', ['$scope', '$location', '$ionicModal', '$timeout', '$rootScope', 'User', function ($scope, $location, $ionicModal, $timeout, $rootScope, User) {
	$scope.loginFormSubmit = function (userObject) {
		User.userLogin(userObject).then(function (user) {
            User.setUserInstance(user);
            User.notifyObservers();
            $location.path('/');
        })
	}
}])