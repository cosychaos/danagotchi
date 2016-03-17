danagotchi.controller('DanagotchiController', ['$resource', 'Quote', function($resource, Quote){
	var self = this;

	self.displayName;
	self.addDisplayName = function(newDisplayName) {
		self.displayName = newDisplayName;
	};

	self.isDisplayNameDefined = function() {
		return !!self.displayName;
	};

}]);

	Quote.getQuote().then(function(quoteData){
		self.quote = quoteData;
	});

}]);
