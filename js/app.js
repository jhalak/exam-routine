angular.module('examroutine', []).
  config(['$routeProvider',function($routeProvider) {
    $routeProvider
      .when('/about',{templateUrl:'partials/about.html', controller:aboutController})
      
      .otherwise({redirectTo:'/home',templateUrl:'partials/home.html',controller:homeController});
}]);