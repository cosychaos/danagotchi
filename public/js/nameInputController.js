danagotchi.controller('nameInputController', ["userService", function(userService) {
	var self = this;

	self.addDisplayName = function(newDisplayName) {
		userService.setDisplayName(newDisplayName);
	};

	self.isDisplayNameDefined = function() {
		return !!userService.getDisplayName();
	};
}]);

