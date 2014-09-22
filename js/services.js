angular.module('app.services', [])
  .factory('postServices', function($http) {

    var postServices = {};

    postServices.getPost = function() {
      return $http({
        method: 'GET', 
        url: './api/post.json'
      });
    }

    postServices.getPostDetail = function(id) {

    }

    return postServices;
  });
