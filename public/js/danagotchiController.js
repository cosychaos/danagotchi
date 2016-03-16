danagotchi.controller('DanagotchiController', ['$resource', function($resource){
	var self = this;

	self.displayName;
	self.gratitudeInput;

	self.addDisplayName = function(newDisplayName) {
		self.displayName = newDisplayName;
	};
	self.isDisplayNameDefined = function() {
		return !!self.displayName;
	};
	self.addGratitudeInput = function(newGratitudeInput) {
		self.gratitudeInput  = newGratitudeInput;
	};
	self.isGratitudeInputDefined = function() {
		return !!self.gratitudeInput;
	};
}]);