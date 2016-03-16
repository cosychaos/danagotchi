'use strict';

describe('DanagotchiControllerSpec', function(){
	beforeEach(module('Danagotchi'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('DanagotchiController');
  }));

  it ("adds a new user", function(){
  	var newDisplayName = ctrl.newDisplayName = "Ina";
  	ctrl.addDisplayName(newDisplayName);
  	expect(ctrl.newDisplayName).toEqual("Ina");
  });

  describe("Displaying elements", function(){
    it("displays a quote", function(){
      expect(ctrl.quote).toEqual("Danagotchi is awesome!")
    });
  });

});
