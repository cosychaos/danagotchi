describe('Danagotchi', function() {

  beforeEach(function() {
    browser.get('http://localhost:4567');
  });

  describe('on page load', function() {

    it('asks for your name and shows a motivational quote', function() {
      expect(element(by.id('display-name-form')).getText()).toBe('What\'s your name?');
      expect(element(by.id('username')).isDisplayed()).toBe(true);
      expect(element(by.id('quote')).isDisplayed()).toBe(true);
    });
  });
});






//   it("user can fill in their details and gratitude input", function(){
//     expect(element(by.css("h1")).getText()).toBe("What's your name?");
//     expect(element(by.id('greeting')).getText()).toBe('');
//     element(by.id('username')).sendKeys("Ina");
//     element(by.id('display-name-form')).submit();
//     expect(browser.getTitle()).toEqual('DANAGOTCHI');
//     expect(element(by.id('greeting')).getText()).toBe('Hello Ina!');
//     expect(element(by.css("h2")).getText()).toBe("What are you grateful for today?");
//     expect(element(by.id('gratitude-input')).getText()).toBe('');
//     element(by.id('gratitude-input')).sendKeys("Family");
//     element(by.id('gratitude-form')).submit();
//     expect(element(by.id('gratitude-answer')).getText()).toBe('Family');
//   });
//
//   it("displays the page title and a quote", function(){
//     browser.get('http://localhost:4567');
//     expect(element(by.id('quote')).getText()).toBe('Danagotchi is awesome!');
//   });
