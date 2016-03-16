danagotchi.factory('Quote', ['$http', function($http){

  var queryUrl = 'http://quotes.rest/qod.json?category=inspire';
  return {
    query: function() {
      return $http({
        url: queryUrl,
        method: 'GET'
      });
    }
  };
}]);
