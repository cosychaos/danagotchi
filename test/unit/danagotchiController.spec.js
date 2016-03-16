'use strict';

describe('DanagotchiControllerSpec', function(){
	beforeEach(module('Danagotchi'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('DanagotchiController');
  }));

  it ("has a display name", function(){
		var newDisplayName = ctrl.newDisplayName = "Ina";
  	ctrl.addDisplayName(newDisplayName);
  	expect(ctrl.newDisplayName).toEqual("Ina");
  });

  describe("Displaying elements", function(){
		beforeEach(inject(function($controller){
			ctrl = $controller('DanagotchiController');
		}));
    it("has a quote", function(){
			var newQuote = ctrl.quote = "Danagotchi is awesome!";
      expect(ctrl.quote).toEqual("Danagotchi is awesome!")
    });
  });

});
