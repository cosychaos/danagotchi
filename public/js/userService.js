danagotchi.service("userService", function(){
	var self = this;

	self.setDisplayName = function(newDisplayName) {
		localStorage.setItem('displayName', newDisplayName);
		self.displayName = localStorage.getItem('displayName');
	};

	self.getDisplayName = function() {
		return localStorage.getItem('displayName');
	};
});