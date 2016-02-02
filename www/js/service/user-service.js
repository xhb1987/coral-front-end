angular.module('bolunbao.user.services', [])
.factory('User', ['$window', '$q', '$http', function ($window, $q, $http) {
    var userObject = new AV.User();
    var q = $q.defer();
    // var userQuery = new AV.Query(userObject);

    var userInstance = {};

    var userRegister = function (user) {
        userObject.set('username', user.phoneNumber);
        userObject.set('password', user.password);

        userObject.signUp().then(function (data) {
            q.resolve(data);
        }, function (error) {
            q.resolve(error);
        })

        return q.promise;
    }

    var setUserInstance = function (user) {
        if (user) {
            angular.extend(userInstance, {
                'ObjectId': user.id,
                'UserName': user.attributes.username,
                'isEmailVerified': user.attributes.emailVerified,
                'isMobilePhoneVerified': user.attributes.mobilePhoneVerified
            })
        }
    }

    var getUserInstance = function () {
        return userInstance;
    }

    var getCurrentUser = function () {
        var currentUser = AV.User.current();
        var userAttr = {}
        if (currentUser) {
            angular.extend(userAttr, currentUser.attributes, currentUser.id);
            q.resolve(userAttr);
        }
        return q.promise;
    }

    return {
        userRegister: userRegister,

        setUserInstance: setUserInstance,

        getUserInstance: getUserInstance,

        getCurrentUser: getCurrentUser
    }
}])