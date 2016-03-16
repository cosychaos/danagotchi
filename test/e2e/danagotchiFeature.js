describe('Danagotchi', function(){
  it("asks for your name and greets you.", function(){
    browser.get('http://localhost:4567');
    expect(element(by.id('nameQuery')).isDisplayed()).toBe(true);
    expect(element(by.id('nameToDisplay')).isDisplayed()).toBe(true);
    expect(element(by.id('greeting')).isDisplayed()).toBe(false);
    element(by.id('nameToDisplay')).sendKeys("Joe");
    element(by.id('nameQuery')).submit();
    expect(element(by.id('nameQuery')).isDisplayed()).toBe(false);
    expect(element(by.id('nameToDisplay')).isDisplayed()).toBe(false);
    expect(element(by.id('greeting')).isDisplayed()).toBe(true);
    expect(element(by.id('greeting')).getText()).toBe('Hello, Joe!');
    // expect(element(by.id('greeting')).getText()).toBe('Hello Ina!');
  });


});
