githubUserSearch.factory('Search', ['$http', function($http){
  var queryUrl = 'https://api.github.com/search/users';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': '7e2741cf0e27e9104ce366c2b251d393bc93a1c5'
        }
      });
    },
    followersQuery: function(username) {
      return $http({
        url: 'https://api.github.com/users/' + username + '/followers',
        method: 'GET',
        params: {
          'access_token': '7e2741cf0e27e9104ce366c2b251d393bc93a1c5'
        }
      });
    },
    reposQuery: function(username) {
      return $http({
        url: 'https://api.github.com/users/' + username + '/repos',
        method: 'GET',
        params: {
          'access_token': '7e2741cf0e27e9104ce366c2b251d393bc93a1c5'
        }
      });
    },
  };
}]);
