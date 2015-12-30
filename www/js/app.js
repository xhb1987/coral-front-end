angular.module('todo', ['ionic', 'reigster', 'login'])
.run(function () {
  AV.initialize('G5U1oJpvNaYxCdim8RNxmllc-gzGzoHsz', 'Co6b01uVBWOgh2miRUzTbc3y');
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/')

  $stateProvider.state('home', {
    url: '/',
    templateUrl: 'template/home.html',
    controller: 'TodoCtrl'
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
  });  
})

.factory('Projects', function () {
  return {
    all: function () {
      var projectString = window.localStorage['projects'];

      if (projectString) {
        return angular.fromJson(projectString);
      }

      return [];
    },

    save: function (projects) {
      window.localStorage['projects'] = angular.toJson(projects);
    },

    newProject: function (projectTitle) {
      return {
        title: projectTitle,
        tasks: []
      };
    },

    getLastActiveIndex: function () {
      return parseInt(window.localStorage['lastActiveProject']) || 0;
    },

    setLastActiveIndex: function (index) {
      window.localStorage['lastActiveProject'] = index;
    }
  }
})

.controller('TodoCtrl', ['$scope', '$timeout', '$ionicModal', 'Projects', '$ionicSideMenuDelegate', function ($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate) {
  // lean cloud

  // var TestObject = AV.Object.extend('TestObject');
  // var testobject = new TestObject();

  // testobject.save({
  //   foo: 'bar'
  // }, {
  //   success: function (object) {
  //     alert('LeanCloud works!');
  //   }
  // })

  var createProject = function (projectTitle) {
    var newProject = Projects.newProject(projectTitle);
    $scope.projects.push(newProject);
    Projects.save($scope.projects);
    $scope.selectProject(newProject, $scope.projects.length - 1);
  };

  $scope.projects = Projects.all();

  $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];

  $scope.newProject = function () {
    var projectTitle = prompt('Project name');
    if (projectTitle) {
      createProject(projectTitle);
    }
  };

  $scope.selectProject = function (project, index) {
    $scope.activeProject = project;
    Projects.setLastActiveIndex(index);
    $ionicSideMenuDelegate.toggleLeft(false);
  }

  $ionicModal.fromTemplateUrl('new-task.html', function (modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope
  });

  $scope.createTask = function (task) {
    if (!$scope.activeProject || !task) {
      return;
    }

    $scope.activeProject.tasks.push({
      title: task.title
    });

    $scope.taskModal.hide();

    Projects.save($scope.projects);

    task.title = "";
  };

  $scope.newTask = function () {
    $scope.taskModal.show();
  };

  $scope.closeNewTask = function () {
    $scope.taskModal.hide();
  };

  $scope.toggleProjects = function () {
    $ionicSideMenuDelegate.toggleLeft();
  }

  $timeout(function () {
    if ($scope.projects.length == 0) {
      while(true) {
        var projectTitle = prompt("Your first project title: ");
        if (projectTitle) {
          createProject(projectTitle);
          break;
        }
      }
    }
  })
}])
