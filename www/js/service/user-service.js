angular.module('coral.user.services', [])
    .factory('User', ['$window', '$q', '$http', function($window, $q, $http) {
        var q = $q.defer();
        var userInstance = {};

        var userRegister = function(user) {
            // userObject.set('username', user.phoneNumber);
            // userObject.set('password', user.password);

            // userObject.signUp().then(function (data) {
            //     q.resolve(data);
            // }, function (error) {
            //     q.resolve(error);
            // })

            // return q.promise;
            console.log('register')
        }

        // var setUserInstance = function (user) {
        //     if (user) {
        //         angular.extend(userInstance, {
        //             'ObjectId': user.id,
        //             'UserName': user.attributes.username,
        //             'isEmailVerified': user.attributes.emailVerified,
        //             'isMobilePhoneVerified': user.attributes.mobilePhoneVerified
        //         })
        //     }
        // }

        // var getUserInstance = function () {
        //     return userInstance;
        // }

        // var getCurrentUser = function () {
        //     var currentUser = AV.User.current();
        //     var userAttr = {}
        //     if (currentUser) {
        //         angular.extend(userAttr, currentUser.attributes, currentUser.id);
        //         q.resolve(userAttr);
        //     }
        //     return q.promise;
        // }

        return {
            //userRegister: userRegister,

            userLogin: function(user) {
                if (user != void 0) {
                    return $http.post(window.nodeUrl + 'user/login', { params: { username: user.username, password: user.password } }).
                    then(function(user) {
                        q.resolve(user.data);
                        return q.promise;
                    });
                } else {
                    q.reject();
                    return q.promise;
                }
            },

            userRegister: function(user) {
                if (user != void 0) {
                    return $http.post(window.nodeUrl + 'user/register', { params: { username: user.username, password: user.password } }).
                    then(function(user) {
                        q.resolve(user.data);
                        return q.promise;
                    })
                }
            },

            setUserInstance: function(user) {
                if (user != void 0) {
                    angular.extend(userInstance, {
                        'ObjectId': user.id,
                        'UserName': user.attributes.username,
                        'isEmailVerified': user.attributes.emailVerified,
                        'isMobilePhoneVerified': user.attributes.mobilePhoneVerified
                    })
                }
            },


            // getUserInstance: getUserInstance,

            // getCurrentUser: getCurrentUser
        }
    }])
