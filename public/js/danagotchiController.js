danagotchi.controller('DanagotchiController', ['$resource', function($resource){
	var self = this;

	self.nameQuery;

	self.submitNameQuery = function(newNameQuerySubmit) {
		self.nameQuery = newNameQuerySubmit;
	};

	self.isNameQuerySet = function() {
		return !!self.nameQuery;
	};

	// self.hello = function() {
	// 	return true;
	// };

}]);
