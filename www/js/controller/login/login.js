angular.module('login', [])
.controller('loginController', ['$scope', '$location', '$ionicModal', '$timeout', '$rootScope', function ($scope, $location, $ionicModal, $timeout, $rootScope) {
	$ionicModal.fromTemplateUrl('my-modal.html', {
		scope: $scope,
		animation: 'slide-in-up'
	}).then(function(modal) {
		$scope.modal = modal;
	});

	$scope.openModal = function() {
		$scope.modal.show();
	};

	$scope.closeModal = function() {
		$scope.modal.hide();
	};

	$scope.loginFormSubmit = function (userObject) {
		AV.User.logIn(userObject.phoneNumber, userObject.password, {
			success: function (userObject) {
			    $scope.$apply(function () {
			        $location.path('home');
			    })
			}, 
			error: function (userObject, error) {
				$rootScope.modalContent = error.message;
				$scope.openModal();
				$timeout(function () {
					$scope.closeModal();
				}, 1500);

			}
		})
	}
}])