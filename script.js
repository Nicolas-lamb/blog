angular.module('blog', []);
angular.module('blog').controller('Rest', function ($scope, $http){
  $http.get('https://api-fake-blog.onrender.com/postagens').
      success(function(data) {
          $scope.publicacoes = data;
      }
  );
});

angular.module('post', []);
angular.module('post').controller('Rest', function ($scope, $http){
    
  $http.get('https://api-fake-blog.onrender.com/postagem/0').
      success(function(data) {
          $scope.publicacao = data;a
      }
  );
});
