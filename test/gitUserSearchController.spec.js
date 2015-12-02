describe('GitUserSearchController', function(){
  beforeEach(module('GitUserSearch'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('GitUserSearchController');
  }));

  it('initializes with an empy search result and term', function(){
    expect(ctrl.searchResult).toBeUndefined();
    expect(ctrl.searchTerm).toBeUndefined();
  });

  describe('When searching for a user', function() {
    var httpBackend;
  beforeEach(inject(function($httpBackend) {
    httpBackend = $httpBackend;
    httpBackend
      .when("GET", "https://api.github.com/search/users?access_token=0e0b7152bf674a88d2cdc4b10c56d1140b44aca0&q=hello")
      .respond(
        { items: items }
      );
  }));
    var items = [
      {
        "login": "tansaku",
        "avatar_url": "https://avatars.githubusercontent.com/u/30216?v=3",
        "html_url": "https://github.com/tansaku"
      },
      {
        "login": "stephenlloyd",
        "avatar_url": "https://avatars.githubusercontent.com/u/196474?v=3",
        "html_url": "https://github.com/stephenlloyd"
      }
    ];

    it('displays search results', function() {
      ctrl.searchTerm = 'hello';
      ctrl.doSearch();
      httpBackend.flush();
      expect(ctrl.searchResult.items).toEqual(items);
    });
  });

});
