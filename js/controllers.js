angular.module('app.controllers', []).

  /* Post controller */
  controller('postControllers', function($scope, postServices) {
    $scope.nameFilter = null;
    $scope.driversList = [];
  }).

  /* Post controller */
  controller('postControllers', function($scope, $routeParams, postServices) {
    $scope.id = $routeParams.id;
    $scope.post = [];

    postServices.getPost($scope.id).success(function (response) {
        console.log(response);
        $scope.post  = response; 
    });

  });