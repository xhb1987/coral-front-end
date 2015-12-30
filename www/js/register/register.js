angular.module('reigster', [])
.controller('registerStep1Controller', ['$scope', '$location', '$http', function ($scope, $location, $http) {
	var userObject = new AV.User();

	$scope.registerFormSubmit = function (user) {
		userObject.set('username', user.phoneNumber);
		userObject.set('password', user.password);

		userObject.signUp(null, {
			success: function (userObject, data) {
				$scope.$apply(function () {
					$location.path('home')
				})
			},
			error: function (userObject, error) {
				console.log('Error: ' + error.code + ' ' + error.message);
			}
		})
	}
}])