function RouteController($scope,$location){
  $scope.setRoute = function(route){
    $location.path(route);
  }
}

function HomeController($scope){
  $scope.title="Home";
  $scope.body="This is Home page";
}

function AboutController($scope){
  $scope.title="Contact";
  $scope.body="This is about page";
}

