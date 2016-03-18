'use strict';

describe('DanagotchiControllerSpec', function(){
	beforeEach(module('Danagotchi'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('DanagotchiController');
  }));

  it ("has a emotion input", function(){
    var newEmotion = ctrl.newEmotion = "8";
    ctrl.addEmotion(newEmotion);
    expect(ctrl.isEmotionDefined()).toEqual(true);
  });

  it ("adds a greeting input", function(){
    var newGratitudeInput = ctrl.newGratitudeInput = "Family";
    ctrl.addGratitudeInput(newGratitudeInput);
    expect(ctrl.isGratitudeInputDefined()).toEqual(true);
  });

  describe("Displaying elements", function(){

		beforeEach(inject(function($controller){
			ctrl = $controller('DanagotchiController');
		}));

    it("has a quote", function(){
			var newQuote = ctrl.Quote = "Danagotchi is awesome!";
      expect(ctrl.Quote).toEqual("Danagotchi is awesome!")
    });
  });

});
