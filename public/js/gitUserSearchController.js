githubUserSearch.controller('GitUserSearchController', ['Search', function(Search){
  var self = this;

  self.doSearch = function (){
  Search.query(self.searchTerm)
  .then(function(response){
    response.data.items.forEach(function(user) {
      return Search.followersQuery(user.login)
      .then(function(followersList){
        user.followers = followersList.data.length;
      })
      .then(function(){
        return Search.reposQuery(user.login)
        .then(function(reposList){
          user.repos = reposList.data.length;
            self.searchResult = response.data;
        });
      });
    });
  });
  };
}]);
