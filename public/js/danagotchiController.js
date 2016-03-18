danagotchi.controller('DanagotchiController', ['$resource', 'Quote', function($resource, Quote){
	var self = this;
	var _maxEmotionRank = 10;

	self.displayName = localStorage.getItem('displayName');
	self.gratitudeInput = localStorage.getItem('gratitudeInput');
	self.emotion = localStorage.getItem('emotion');

	self.addDisplayName = function(newDisplayName) {
		localStorage.setItem('displayName', newDisplayName);
		self.displayName = localStorage.getItem('displayName');
	};

	self.isDisplayNameDefined = function() {
		return !!self.displayName;
	};

	self.emotionsRatings= function() {
		ratings = []
		for (i = 1; i <= _maxEmotionRank; i ++) {
 			ratings.push(i);
		}
		return ratings;
	};

	self.addEmotion = function(newEmotion) {
		localStorage.setItem('emotion', newEmotion);
		self.emotion = localStorage.getItem('emotion');
	};

	self.isEmotionDefined = function() {
		return !!self.emotion;
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
		setTimeout(function(){self.show = false}, 1000);
	}

	self.delete = function(){
		self.gratitudeInput = localStorage.removeItem('gratitudeInput');
	}

	Quote.getQuote().then(function(quoteData){
		self.quote = quoteData;
	});
}]);

