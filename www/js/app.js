// angular.module('bolunbao', ['ionic', 'reigster', 'login', 'home', 'bolunbao.factory'])
// .run(function (Product) {
//   AV.initialize('G5U1oJpvNaYxCdim8RNxmllc-gzGzoHsz', 'Co6b01uVBWOgh2miRUzTbc3y');
// })

// .config(function($stateProvider, $urlRouterProvider) {
//   $urlRouterProvider.otherwise('/')

//   $stateProvider.state('home', {
//     url: '/',
//     templateUrl: 'template/home/home.html',
//     controller: 'homeController'
//   })
//   .state('register', {
//     url: '/register',
//     templateUrl: 'template/register/register.html',
//     controller: 'registerStep1Controller',
//     module: 'reigster'
//   })
//   .state('login', {
//     url: '/login',
//     templateUrl: 'template/login/login.html',
//     controller: 'loginController',
//     module: 'login'
//   });  
// })

// .factory('Projects', function () {
//   return {
//     all: function () {
//       var projectString = window.localStorage['projects'];

//       if (projectString) {
//         return angular.fromJson(projectString);
//       }

//       return [];
//     },

//     save: function (projects) {
//       window.localStorage['projects'] = angular.toJson(projects);
//     },

//     newProject: function (projectTitle) {
//       return {
//         title: projectTitle,
//         tasks: []
//       };
//     },

//     getLastActiveIndex: function () {
//       return parseInt(window.localStorage['lastActiveProject']) || 0;
//     },

//     setLastActiveIndex: function (index) {
//       window.localStorage['lastActiveProject'] = index;
//     }
//   }
// })

// .controller('TodoCtrl', ['$scope', '$timeout', '$ionicModal', 'Projects', '$ionicSideMenuDelegate', function ($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate) {
//   // lean cloud

//   // var TestObject = AV.Object.extend('TestObject');
//   // var testobject = new TestObject();

//   // testobject.save({
//   //   foo: 'bar'
//   // }, {
//   //   success: function (object) {
//   //     alert('LeanCloud works!');
//   //   }
//   // })

//   var createProject = function (projectTitle) {
//     var newProject = Projects.newProject(projectTitle);
//     $scope.projects.push(newProject);
//     Projects.save($scope.projects);
//     $scope.selectProject(newProject, $scope.projects.length - 1);
//   };

//   $scope.projects = Projects.all();

//   $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];

//   $scope.newProject = function () {
//     var projectTitle = prompt('Project name');
//     if (projectTitle) {
//       createProject(projectTitle);
//     }
//   };

//   $scope.selectProject = function (project, index) {
//     $scope.activeProject = project;
//     Projects.setLastActiveIndex(index);
//     $ionicSideMenuDelegate.toggleLeft(false);
//   }

//   $ionicModal.fromTemplateUrl('new-task.html', function (modal) {
//     $scope.taskModal = modal;
//   }, {
//     scope: $scope
//   });

//   $scope.createTask = function (task) {
//     if (!$scope.activeProject || !task) {
//       return;
//     }

//     $scope.activeProject.tasks.push({
//       title: task.title
//     });

//     $scope.taskModal.hide();

//     Projects.save($scope.projects);

//     task.title = "";
//   };

//   $scope.newTask = function () {
//     $scope.taskModal.show();
//   };

//   $scope.closeNewTask = function () {
//     $scope.taskModal.hide();
//   };

//   $scope.toggleProjects = function () {
//     $f.toggleLeft();
//   }

//   $timeout(function () {
//     if ($scope.projects.length == 0) {
//       while(true) {
//         var projectTitle = prompt("Your first project title: ");
//         if (projectTitle) {
//           createProject(projectTitle);
//           break;
//         }
//       }
//     }
//   })
// }])

angular.module('coral', ['ionic', 'reigster', 'login', 'logout', 'home', 'product', 'personalization', 'personalizationSetting', 'coral.validation', 'coral.product.services', 'coral.user.services'])
.run(['$http', function ($http){
    window.nodeUrl = 'http://localhost:80/';

    $http.get(window.nodeUrl + 'init/init').
    success(function (data) {
        console.log(data);          
    })
}])
.factory('httpLoadingInterceptor', function ($q, $injector) {

    var showLoading = function () {
        $injector.get('$ionicLoading').show({
            template: 'Loading...',
        })
    };

    var hideLoading = function () {
        $injector.get('$ionicLoading').hide();
    }

    return {
        request: function (config) {
            showLoading();
            return config;
        },

        response: function (response) {
            hideLoading();
            return response;
        },

        responseError: function (response) {
            return response;
        }
    }


})
.config(function ($stateProvider, $urlRouterProvider, ValidationProvider, $httpProvider) {
    $urlRouterProvider.otherwise('/')

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'template/home/home.html',
        controller: 'homeController',
        module: 'home'
    })
    .state('product', {
        url: '/product-edit',
        templateUrl: 'template/product/product-edit.html',
        controller: 'productEditController',
        module: 'product'
    })
    .state('product-detail', {
        url: '/product/detail',
        templateUrl: 'template/product/product-detail.html',
        controller: 'productDetailController',
        module: 'product'
    })
    .state('register', {
        url: '/register',
        templateUrl: 'template/register/register.html',
        controller: 'registerStep1Controller',
        module: 'reigster'
    })
    .state('login', {
        url: '/login',
        templateUrl: 'template/login/login.html',
        controller: 'loginController',
        module: 'login'
    })
    .state('logout', {
        url: '/logout',
        templateUrl: 'template/logout/logout.html',
        controller: 'logoutController',
        module: 'logout'
    })
    .state('personalization', {
        url: '/personalization',
        templateUrl: 'template/personalization/personalization.html',
        controller: 'personalizationController',
        module: 'personalization'
    })
    .state('personalization-setting', {
        url: '/personalization-setting',
        templateUrl: 'template/personalization/personalization-setting.html',
        controller: 'personalizationSettingController',
        module: 'personalizationSetting'
    });

    ValidationProvider.setErrorMessage({ 
                                        required: {message: 'required error message',
                                                   weight: 1}, 
                                        integer: {message: 'should be integer',
                                                  weight: 3},
                                        phone: {message: 'should be phone number',
                                                  weight: 2},

                                        });

    $httpProvider.interceptors.push('httpLoadingInterceptor');
})
.controller('appController', ['$scope', '$location', '$ionicHistory', 'User', function ($scope, $location, $ionicHistory, User) {
    
    $scope.customBack = function() {
        var backViewStateName = $ionicHistory.backView().stateName;
        // if (backViewStateName === "personalization") {
        //     var currentUser = User.getCurrentUser();
        //     currentUser.then(function(current) {
        //         if (current) {

        //         } else {
        //             $ionicHistory.goBack(-2);
        //         }
        //     })
        // }
        $ionicHistory.goBack();
    };
}])
.controller('footerController', ['$scope', '$location', 'User', function ($scope, $location, User) {
    $scope.userAuthButtonName = 'Login';

    var checkUserStatus = function () {
        if (User.getUserInstance() != null) {
            $scope.userAuthButtonName = 'Me';
        } else {
            $scope.userAuthButtonName = 'Login';
        }
    }

    User.registerObserverCallback(checkUserStatus);

    $scope.userAuth = function () {
        if (User.getUserInstance() != null) {
            $location.path('personalization');
        } else {
            $location.path('login');
        }
    }
}])
.run(['$rootScope', '$location', 'User', function ($rootScope, $location, User) {
    // $rootScope.$on('$locationChangeSuccess', function (object, current, previous) {
    //     var currentPath = $location.path();
    //     if (currentPath == '/personalization') {
    //         var currentUser = AV.User.current();
    //         if (!currentUser) {
    //             $location.path('login');
    //         }
    //     }
    // })
}])