danagotchi.service("Quote", function($resource, $q){
  var self = this;
  var defer = $q.defer();
  var banana = $resource("http://quotes.rest/qod.json?category=inspire");

  self.getQuote = function() {
    banana.get().$promise.then(function(response) {
      defer.resolve(response.contents.quotes[0].quote);
    });
    return defer.promise;
  }
});
