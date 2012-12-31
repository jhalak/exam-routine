
function MainController($scope,$location){
    $scope.setRoute=function(route){
        $location.path(route);
    }

}

function aboutController($scope){
    $scope.title="Contact";
    $scope.body="This is about page";
}

function homeController($scope){
  $scope.title="Home";
  $scope.body="This is Home page";
}
