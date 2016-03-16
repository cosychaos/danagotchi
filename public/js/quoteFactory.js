danagotchi.factory("Quote", function($resource) {
	return $resource("http://quotes.rest/qod.json?category=inspire");
});
