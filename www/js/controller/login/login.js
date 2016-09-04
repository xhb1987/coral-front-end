angular.module('login', [])
.controller('loginController', ['$scope', '$location', '$ionicModal', '$timeout', '$rootScope', function ($scope, $location, $ionicModal, $timeout, $rootScope) {
	// $scope.loginFormSubmit = function (userObject) {
	// 	AV.User.logIn(userObject.phoneNumber, userObject.password, {
	// 		success: function (userObject) {
	// 		    $scope.$apply(function () {
	// 		        $location.path('home');
	// 		    })
	// 		}, 
	// 		error: function (userObject, error) {
	// 			$rootScope.modalContent = error.message;
	// 			$scope.openModal();
	// 			$timeout(function () {
	// 				$scope.closeModal();
	// 			}, 1500);

	// 		}
	// 	})
	// }
}])