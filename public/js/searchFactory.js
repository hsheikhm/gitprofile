githubUserSearch.factory('Search', ['$http', function($http){
  var queryUrl = 'https://api.github.com/search/users';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm
        }
      });
    },
    followersQuery: function(username) {
      return $http({
        url: 'https://api.github.com/users/' + username + '/followers',
        method: 'GET'
      });
    },
    reposQuery: function(username) {
      return $http({
        url: 'https://api.github.com/users/' + username + '/repos',
        method: 'GET'
      });
    },
  };
}]);
