angular.module('app', [
  'app.services',
  'app.controllers',
  'ngRoute'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.
	when("/post", {templateUrl: "templates/post.html", controller: "postControllers"}).
	when("/post/:id", {templateUrl: "templates/post.html", controller: "postControllers"}).
	otherwise({redirectTo: '/'});
}]);