danagotchi.controller('DanagotchiController', ['$resource', 'Quote', function($resource, Quote){
	var self = this;

	self.displayName;
	self.addDisplayName = function(newDisplayName) {
		self.displayName = newDisplayName;
	};

	Quote.get(function(response) {
		self.quote = response.contents.quotes[0].quote;
	});

}]);
