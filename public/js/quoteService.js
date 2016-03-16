danagotchi.service("Quote", function($resource){
  var self = this;
  var banana = $resource("http://quotes.rest/qod.json?category=inspire");

  self.getQuote = function() {
    banana.get().$promise.then(function(response) {
      self.quote = response.contents.quotes[0].quote;
      return self.quote;
    });
  }
});
