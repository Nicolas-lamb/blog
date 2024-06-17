angular.module('blog', [])
.controller('Rest', function($scope, $http, $window) {
  $http.get('https://api-fake-blog.onrender.com/postagens')
    .success(function(data) {
      $scope.publicacoes = data;
    });

  $scope.viewPost = function(postId) {
    $window.location.href = 'post.html?id=' + postId;
  };
})
.controller('Postagem', function($scope, $http, $window) {
  const queryParams = new URLSearchParams($window.location.search);
  const postId = queryParams.get('id');

  if (postId) {

    $http.get(`https://api-fake-blog.onrender.com/postagem/`+postId)
      .success(function(data) {
        $scope.publicacao = data;
      });
      
  }
});
