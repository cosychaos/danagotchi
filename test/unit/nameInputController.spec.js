'use strict';

describe('nameInputControllerSpec', function(){
	beforeEach(module('Danagotchi'));

	beforeEach(inject(function($controller){
    ctrl = $controller('nameInputController');
  }));

  var ctrl;

  it ("has a display name", function(){
		var newDisplayName = ctrl.newDisplayName = "Ina";
  	ctrl.addDisplayName(newDisplayName);
  	expect(ctrl.isDisplayNameDefined()).toEqual(true);
  });
});

