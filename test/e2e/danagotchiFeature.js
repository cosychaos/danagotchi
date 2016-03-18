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

  describe('on user name input', function() {

    beforeEach(function() {
      element(by.id('username')).sendKeys("Vicky");
      element(by.id('display-name-form')).submit();
    });

    it('greets the user by name and asks what they are grateful for', function() {
      expect(element(by.id('username')).isDisplayed()).toBe(false);
      expect(element(by.id('quote')).isDisplayed()).toBe(true);
      expect(element(by.id('greeting')).getText()).toBe('Hello Vicky!');
      expect(element(by.id('gratitude-question')).getText()).toBe('What are you grateful for today?');
      expect(element(by.id('gratitude-input')).isDisplayed()).toBe(true);
    });
  });

  describe('on gratitude input', function() {

    beforeEach(function() {
      element(by.id('gratitude-input')).sendKeys("Cake");
      element(by.id('gratitude-form')).submit();
    });

    it('lists what the user is grateful for', function() {
      expect(element(by.id('gratitude-header')).getText()).toBe('Today\nI\'m grateful for');
      expect(element(by.id('gratitude-answer')).getText()).toBe('Cake');
    });
  });
});
