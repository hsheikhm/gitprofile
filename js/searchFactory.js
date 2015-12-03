githubUserSearch.factory('Search', ['$http', function($http){
  var queryUrl = 'https://api.github.com/search/users';

  return {
    query: function(searchTerm) {
      return $http({
        url: queryUrl,
        method: 'GET',
        params: {
          'q': searchTerm,
          'access_token': 'ff0e33ae3b97a0f52096f0142ad0beba6f0a3e0f'
        }
      });
    }
  };
}]);
