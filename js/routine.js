angular.module('routine', ['routinModel']).
  config(['$routeProvider',function($routeProvider) {
    $routeProvider
      .when('/about',{templateUrl:'partials/about.html', controller:AboutController})
      
      .otherwise({redirectTo:'/home',templateUrl:'partials/home.html',controller:RoutineController});
}]);

function HomeController($scope, Routine){
  $scope.title="Home";
  $scope.body="This is Home page";
  $scope.routines = Routine.query();
}

function AboutController($scope){
  $scope.title="Contact";
  $scope.body="This is about page";
}

function RoutineController($scope, Routine) {
  //$scope.routines = Routine.query();
  Routine.get({action:'home'},function(response){
    $scope.routines = response.data;
  });
}