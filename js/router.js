angular.module('examroutine', []).
  config(['$routeProvider',function($routeProvider) {
    $routeProvider
      .when('/about',{templateUrl:'partials/about.html', controller:AboutController})
      
      .otherwise({redirectTo:'/home',templateUrl:'partials/home.html',controller:HomeController});
}]);