danagotchi.controller('DanagotchiController', ['$resource', 'Quote', function($resource, Quote){
	var self = this;

	self.displayName = localStorage.getItem('displayName');
	self.gratitudeInput = localStorage.getItem('gratitudeInput');

	self.addDisplayName = function(newDisplayName) {
		localStorage.setItem('displayName', newDisplayName);
		self.displayName = localStorage.getItem('displayName');
	}

	self.isDisplayNameDefined = function() {
		return !!self.displayName;
	};

	self.addGratitudeInput = function(newGratitudeInput) {
		localStorage.setItem('gratitudeInput', newGratitudeInput);
		self.gratitudeInput  = localStorage.getItem('gratitudeInput');
	};
	self.isGratitudeInputDefined = function() {
		return !!self.gratitudeInput;
	};
	self.showButton = function() {
		self.show = true;
	}
	self.hideButton = function() {
		timeOut(function(){
			self.show = false;
		}, 1000);
	}

	self.delete = function(){
		self.gratitudeInput = localStorage.removeItem('gratitudeInput');
	}

	Quote.getQuote().then(function(quoteData){
		self.quote = quoteData;
	});
}]);

