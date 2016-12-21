angular.module('coral.user.services', [])
    .factory('User', ['$window', '$q', '$http', function($window, $q, $http) {
        var userInstance = {};
        var userObserverCallback = [];

        var notifyObservers = function () {
            angular.forEach(userObserverCallback, function (callback) {
                callback();
            })
        }

        return {
            //userRegister: userRegister,
            registerObserverCallback: function (callback) {
                userObserverCallback.push(callback);
            },

            notifyObservers: notifyObservers,

            userLogin: function(user) {
                var q = $q.defer();
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
                var q = $q.defer();
                if (user != void 0) {
                    return $http.post(window.nodeUrl + 'user/register', { params: { username: user.username, password: user.password } }).
                    then(function(user) {
                        q.resolve(user.data);
                        return q.promise;
                    }, function (err) {
                        q.resolve(err.data);
                        return q.promise; 
                    })
                }
            },

            userLogout: function(user) {
                var q = $q.defer();
                if (user != void 0) {
                    return $http.post(window.nodeUrl + 'user/logout').
                    then(function(data) {
                        q.resolve(data.data);
                        userInstance = {};
                        return q.promise;
                    })
                }
            },

            setUserInstance: function(user) {
                if (user != void 0) {
                    angular.extend(userInstance, {
                        'ObjectId': user.objectId,
                        'UserName': user.username,
                        'isEmailVerified': user.emailVerified,
                        'isMobilePhoneVerified': user.mobilePhoneVerified,
                        'name': user.name,
                        'address': user.address
                    })
                } else {
                    userInstance = {};
                }
            },

            getUserInstance: function() {
                if (Object.getOwnPropertyNames(userInstance).length > 0) {
                    return userInstance;
                } else {
                    return null;
                }
            }
        }
    }])
