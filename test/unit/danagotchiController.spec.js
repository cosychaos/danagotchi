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
});	


// describe('DanagotchiControllerSpec', function(){
//   beforeEach(module('Danagotchi'));
//
//   var ctrl;
//
//   beforeEach(inject(function($controller){
//     ctrl = $controller('DanagotchiController');
//   }));
//
//   it("should have a working index_path route", function(){
//
//   });
//
// });
