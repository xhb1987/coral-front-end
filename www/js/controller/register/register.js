angular.module('reigster', [])
.controller('registerStep1Controller', ['$scope', '$location', '$http', 'User', function ($scope, $location, $http, User) {
	
	$scope.registerFormSubmit = function (userObject) {
        console.log($scope)
	    User.userRegister(userObject).then(function (data) {            
	        if (data.hasOwnProperty('status')) {
	            if (data.status == 'fail') {
                    console.log(data);
                }
	        } else {
	            User.setUserInstance(data);
	            console.log(User.getUserInstance());
	        }
	    })
	}
}])