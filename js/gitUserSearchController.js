githubUserSearch.controller('GitUserSearchController', ['$resource', function($resource){
  var self = this;
  var searchResource = $resource('https://api.github.com/search/users');

  self.doSearch = function (){
    self.searchResult = searchResource.get(
    { q: self.searchTerm,
    access_token: '0e0b7152bf674a88d2cdc4b10c56d1140b44aca0'}
  );
  console.log(self.searchResult);
  };
}]);
