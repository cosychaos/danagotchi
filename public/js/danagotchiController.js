danagotchi.controller('DanagotchiController', ['$resource', function($resource){
	var self = this;

	self.displayName;
	self.addDisplayName = function(newDisplayName) {
		self.displayName = newDisplayName;
	};

	self.quote = "Danagotchi is awesome!";

}]);
